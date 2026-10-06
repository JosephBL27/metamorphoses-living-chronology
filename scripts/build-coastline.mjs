/*
 * Project the coastline once, at author time, and commit the result.
 *
 * The alternative was to ship d3-geo, topojson-client and a Natural Earth
 * TopoJSON to every reader and reproject on load. That is roughly 400 KB and a
 * frame of work to draw a coastline that never changes. Projecting here means
 * the runtime ships nothing new at all, and the chart is still *generated* from
 * real data rather than traced by hand — which is the rule the rest of the
 * instrument follows.
 *
 * Regenerate after changing the gazetteer or the frame:
 *   node scripts/build-coastline.mjs
 *
 * Source: Natural Earth via the `world-atlas` package. Natural Earth is public
 * domain; `world-atlas` and `d3-geo` are ISC. Both are devDependencies only.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { geoEquirectangular, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import { PLACES } from "../data/places/index.js";

/*
 * 50m, and the reason changed.
 *
 * This was 110m while the chart had one scale. 110m is a generalised coast: it
 * carries the frame at a seventh of the weight, and a portolan generalises its
 * coast anyway, so the trade was right for a sheet meant to be read whole.
 *
 * The chart now has plates. Asking a reader to close on Greece and then handing
 * them a Peloponnese with four straight sides makes a liar of the line under
 * the plate that says the coast is projected from survey data. 50m costs about
 * forty kilobytes gzipped over the whole bundle and buys a coast that survives
 * the scale the reader is actually invited to use. Override with RES=110m.
 */
const RES = process.env.RES || "50m";

// Equirectangular, because that is what a portolan chart effectively is: a
// plain grid of latitude and longitude with the rhumb lines drawn on top. A
// conic would be more accurate and would look wrong.
const WIDTH = 1600;
const HEIGHT = 900;

// The frame is fitted to the gazetteer with a margin, so adding a place at the
// edge of the poem's world widens the chart instead of falling off it.
const lons = PLACES.map(place => place.at[0]);
const lats = PLACES.map(place => place.at[1]);
const MARGIN = 6;
const bounds = {
  west: Math.min(...lons) - MARGIN,
  east: Math.max(...lons) + MARGIN,
  south: Math.min(...lats) - MARGIN,
  north: Math.max(...lats) + MARGIN
};

/*
 * A MultiPoint, not a Polygon.
 *
 * d3-geo reads polygon rings spherically: wound the wrong way, a rectangle
 * round the Mediterranean describes *the rest of the planet*, and fitExtent
 * dutifully fits the globe into the frame. A point set has no winding and no
 * ambiguity, so the corners say exactly what they mean.
 */
const extent = {
  type: "MultiPoint",
  coordinates: [
    [bounds.west, bounds.south], [bounds.east, bounds.south],
    [bounds.east, bounds.north], [bounds.west, bounds.north]
  ]
};

/*
 * No clipExtent.
 *
 * Clipping to the frame is the obvious way to drop the Americas, and it is
 * wrong here: once the frame cuts through Afro-Eurasia, the clip closes each
 * severed polygon along the frame edge, and the resulting ring encloses the
 * *sea* rather than the land. The chart renders inside-out — a vellum
 * Mediterranean with navy continents — and no fill-rule can undo it, because
 * the geometry genuinely describes the complement.
 *
 * Instead: keep whole polygons, discard the ones that never touch the frame,
 * and let the SVG viewBox do the cropping. Nothing is cut, so nothing inverts.
 */
const projection = geoEquirectangular().fitExtent([[0, 0], [WIDTH, HEIGHT]], extent);
// Integer precision: a tenth of a chart unit is a fortieth of a pixel on
// screen and costs a byte per coordinate across tens of thousands of them.
const path = geoPath(projection).digits(0);

const atlas = JSON.parse(readFileSync(new URL(`../node_modules/world-atlas/land-${RES}.json`, import.meta.url)));
const land = feature(atlas, atlas.objects.land);

/*
 * Drop what cannot be seen.
 *
 * At 50m the Mediterranean carries thousands of islets a fraction of a pixel
 * across — they are most of the file and none of the picture. Keeping the
 * resolution and discarding the invisible gives a coast with Delos and Naxos
 * still on it at a twelfth of the size of the unfiltered path.
 */
const MIN_AREA = 2; // square chart units
const PAD = 60;      // keep a little beyond the frame so coasts run off the edge

const touchesFrame = geometry => {
  const [[x0, y0], [x1, y1]] = path.bounds(geometry);
  return x1 > -PAD && x0 < WIDTH + PAD && y1 > -PAD && y0 < HEIGHT + PAD;
};

const visible = {
  type: "FeatureCollection",
  features: land.features.flatMap(item => {
    const polygons = item.geometry.type === "MultiPolygon"
      ? item.geometry.coordinates
      : [item.geometry.coordinates];
    const kept = polygons.filter(rings => {
      const geometry = { type: "Polygon", coordinates: rings };
      if (!touchesFrame(geometry)) return false;
      // Drop what cannot be seen: at this scale the Aegean carries islets a
      // fraction of a pixel across, and they are most of the file.
      return path.area(geometry) >= MIN_AREA;
    });
    if (!kept.length) return [];
    return [{ type: "Feature", geometry: { type: "MultiPolygon", coordinates: kept } }];
  })
};

const round = value => Number(value.toFixed(1));

// Ten-degree graticule, which is the register a chart of this period would rule.
const graticule = geoGraticule().step([10, 10]).extent([
  [bounds.west, bounds.south], [bounds.east, bounds.north]
]);

const project = ([lon, lat]) => {
  const point = projection([lon, lat]);
  return point ? [round(point[0]), round(point[1])] : null;
};

const output = `/*
 * GENERATED FILE — do not edit by hand.
 * Regenerate with: node scripts/build-coastline.mjs
 *
 * The coastline of the poem's world, projected once from Natural Earth (public
 * domain) with an equirectangular projection fitted to the gazetteer. Committed
 * as plain path data so the site ships no geographic libraries.
 */

export const CHART = {
  width: ${WIDTH},
  height: ${HEIGHT},
  bounds: ${JSON.stringify(bounds)},
  /** Longitude and latitude to chart units, for anything placed after the fact. */
  scale: {
    x0: ${round(projection([bounds.west, 0])[0])},
    x1: ${round(projection([bounds.east, 0])[0])},
    y0: ${round(projection([0, bounds.north])[1])},
    y1: ${round(projection([0, bounds.south])[1])},
    west: ${bounds.west}, east: ${bounds.east},
    north: ${bounds.north}, south: ${bounds.south}
  }
};

export const LAND_PATH = "${path(visible)}";

export const GRATICULE_PATH = "${path(graticule())}";

/** Gazetteer names already projected, so the runtime never does geography. */
export const PLACE_POINTS = ${JSON.stringify(
  Object.fromEntries(PLACES.map(place => [place.name, project(place.at)])),
  null,
  2
)};

/*
 * Territories, projected.
 *
 * A region is not a dot. Arcadia, Thrace and Libya are areas, and a chart that
 * pins them to a single point says nothing about how much ground the poem's
 * geography actually covers. Each is an approximate classical bound, projected
 * here to chart units as [x0, y0, x1, y1].
 */
export const PLACE_EXTENTS = ${JSON.stringify(
  Object.fromEntries(
    PLACES.filter(place => place.extent).map(place => {
      const [[west, south], [east, north]] = place.extent;
      const topLeft = project([west, north]);
      const bottomRight = project([east, south]);
      return [place.name, [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]]];
    })
  ),
  null,
  2
)};
`;

writeFileSync(new URL("../data/places/chart.js", import.meta.url), output);

const bytes = Buffer.byteLength(output);
console.log(`frame   ${bounds.west.toFixed(1)}°..${bounds.east.toFixed(1)}° lon, ${bounds.south.toFixed(1)}°..${bounds.north.toFixed(1)}° lat`);
console.log(`places  ${PLACES.length} projected, ${PLACES.filter(p => p.extent).length} with territory`);
console.log(`written data/places/chart.js — ${(bytes / 1024).toFixed(1)} KB`);
