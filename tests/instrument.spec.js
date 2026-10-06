import { expect, test } from "@playwright/test";

/*
 * The five viewports are the points where the interface changes shape:
 * two desktop widths, the tablet where the console stops sitting beside the
 * wheel, the portrait tablet, and the phone.
 */
const VIEWPORTS = [
  { name: "1536x1024", width: 1536, height: 1024 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "390x844", width: 390, height: 844 }
];

/**
 * Wait for fonts and for the data-driven rings to exist. Only one workspace
 * is on screen at a time, so these are checked as attached rather than
 * visible — on the stemma route the wheel is present but off-stage.
 */
async function settle(page) {
  await page.waitForSelector("#book-ring .book-segment", { state: "attached" });
  await page.waitForSelector("#ornament-catasterisms .catasterism", { state: "attached" });
  await page.waitForSelector("#stemma-list button", { state: "attached" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(350);
}

for (const viewport of VIEWPORTS) {
  test.describe(`at ${viewport.name}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    test("instrument", async ({ page }) => {
      await page.goto("/#instrument");
      await settle(page);
      await expect(page).toHaveScreenshot(`instrument-${viewport.name}.png`);
    });

    test("stemma", async ({ page }) => {
      await page.goto("/#stemma");
      await settle(page);
      await expect(page).toHaveScreenshot(`stemma-${viewport.name}.png`);
    });
  });
}

test.describe("interaction states at 1440x900", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("episode folio carries the expanded reading", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator('[data-ring-kind="episode"][data-ring-index="5"]').click();
    await expect(page.locator("#focus-folio")).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator("#focus-folio-title")).toHaveText("Apollo & Daphne");
    await expect(page.locator("#focus-folio-reading")).not.toBeEmpty();
    await expect(page.locator("#focus-folio-turn")).not.toBeEmpty();
    await page.locator("#focus-folio-image").evaluate(image => image.decode());
    await page.evaluate(() => document.fonts.ready);
    // The plate is an object-fit: cover crop of a full engraving, so its
    // framing shifts with a pixel of variance in the column beside it. That
    // makes it the one part of this folio a pixel comparison cannot hold, and
    // it is masked rather than allowed to fail the layout guard around it. The
    // plate's own content is asserted by the caption and alt text elsewhere.
    await expect(page).toHaveScreenshot("folio-1440x900.png", {
      mask: [page.locator(".focus-folio-plate")]
    });
  });

  test("cast opens a dossier with three name registers", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator('[data-ring-kind="episode"][data-ring-index="5"]').click();
    await page.locator('[data-focus-cast="Apollo"]').click();
    const sheet = page.locator("#figure-sheet");
    await expect(sheet).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator("#figure-sheet-name")).toHaveText("Apollo");
    await expect(page.locator("#figure-greek")).toContainText("Apóll");
    await expect(page.locator("#figure-roman")).toContainText("Phoebus");
    await expect(page.locator("#figure-ovid")).not.toBeEmpty();
    await expect(page.locator("#figure-here-scope")).toContainText("Apollo & Daphne");
    await expect(page).toHaveScreenshot("dossier-1440x900.png");
  });

  test("selecting a book updates both the wheel and the console", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator('[data-hero-book="7"]').click();
    await expect(page.locator("#console-book")).toHaveText("Book VIII");
    await expect(page.locator(".book-segment.is-active")).toHaveCount(1);
    await expect(page.locator(".book-segment").nth(7)).toHaveClass(/is-active/);
  });

  test("keyboard reaches a stemma figure and Escape returns focus", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const node = page.locator("[data-stemma-figure]").first();
    const name = await node.getAttribute("data-stemma-figure");
    await node.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#figure-sheet")).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator(".figure-sheet-close")).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.locator("#figure-sheet")).toHaveAttribute("aria-hidden", "true");
    await expect(page.locator(`[data-stemma-figure="${name}"]`)).toBeFocused();
  });

  /*
   * The field is measured from the wheel rather than authored as a gradient,
   * so it can fail silently: a mis-measure leaves an empty SVG and the page
   * still looks fine at a glance. This checks it drew, and that it drew
   * *around the wheel* — a rhumb has to start on the plate's own edge.
   */
  test("the instrument stands on a measured field", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    expect(await page.locator(".field-rhumb").count()).toBeGreaterThan(8);
    expect(await page.locator(".field-star").count()).toBeGreaterThan(50);
    expect(await page.locator(".field-arc").count()).toBeGreaterThan(0);

    const aligned = await page.evaluate(() => {
      const panel = document.querySelector(".instrument-side").getBoundingClientRect();
      const disc = document.querySelector("#volvelle").getBoundingClientRect();
      const centre = {
        x: disc.left - panel.left + disc.width / 2,
        y: disc.top - panel.top + disc.height / 2
      };
      const rhumb = document.querySelector(".field-rhumb");
      const start = { x: Number(rhumb.getAttribute("d").split(" ")[1]), y: Number(rhumb.getAttribute("d").split(" ")[2]) };
      return Math.hypot(start.x - centre.x, start.y - centre.y) / (disc.width / 2);
    });
    // The first rhumb leaves the plate just outside its engraved edge.
    expect(aligned).toBeGreaterThan(0.9);
    expect(aligned).toBeLessThan(1.3);
  });

  test("interface text stays real and selectable", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    const consoleText = await page.locator("#console-summary").innerText();
    expect(consoleText.length).toBeGreaterThan(80);
    // SVG labels are real <text>, not rasterised art, so they carry content.
    const rings = await page.locator("#episode-ring text").allTextContents();
    expect(rings.length).toBeGreaterThan(0);
    expect(rings.join("").trim()).not.toBe("");
  });
});

/*
 * Views you can enter must be views you can leave.
 *
 * The whole-poem scope hid the panel its own switch lived in, so a reader who
 * opened it had no control left to close it. The general rule this asserts:
 * whatever changes which view is shown must outlive every view it can hide.
 */
test.describe("no one-way views at 1440x900", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("the whole-poem scope can be left again", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);

    await page.locator('[data-stemma-scope="poem"]').click();
    await expect(page.locator("#master-genealogy")).toBeVisible();

    // The way out has to still be on the screen.
    await expect(page.locator('[data-stemma-scope="book"]')).toBeVisible();
    await expect(page.locator('[data-stemma-scope="house"]')).toBeVisible();

    await page.locator('[data-stemma-scope="book"]').click();
    await expect(page.locator("#master-genealogy")).toBeHidden();
    await expect(page.locator("[data-stemma-figure]").first()).toBeVisible();
  });

  test("Escape leaves the whole-poem scope too", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    await page.locator('[data-stemma-scope="poem"]').click();
    await expect(page.locator("#master-genealogy")).toBeVisible();
    await page.locator('[data-stemma-scope="poem"]').press("Escape");
    await expect(page.locator("#master-genealogy")).toBeHidden();
    await expect(page.locator('[data-stemma-scope="book"]')).toHaveAttribute("aria-pressed", "true");
  });

  // Binding persistent controls inside a render stacks one listener per
  // render, so a single click eventually re-renders the workspace many times.
  test("switching scope repeatedly does not stack listeners", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    for (let round = 0; round < 4; round += 1) {
      await page.locator('[data-stemma-scope="house"]').click();
      await page.locator('[data-stemma-scope="book"]').click();
    }
    await expect(page.locator('[data-stemma-scope="book"]')).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#master-genealogy")).toBeHidden();
    expect(await page.locator("[data-stemma-figure]").count()).toBeGreaterThan(1);
  });
});

/*
 * Zoom belongs to every plate that can outgrow its window, not just the chart.
 * The stemma is the case that mattered: a whole house is four thousand pixels
 * wide and the only way to see its shape was to drag across it.
 */
test.describe("the stemma zooms at 1440x900", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("every house in every book actually draws", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    // The Cyprian line drew nothing for as long as it existed: Pygmalion's
    // children pointed at Paphos, and Paphos was never entered, so the descent
    // from the house's own root was one node long and the plate reported the
    // house empty. Nothing in the suite would have noticed, because nothing
    // walked every house of every book.
    const blank = [];
    for (let book = 0; book < 15; book += 1) {
      await page.selectOption("#stemma-book-select", String(book));
      await page.waitForTimeout(120);
      const houses = await page.locator("[data-stemma-house]").evaluateAll(
        nodes => nodes.map(node => node.dataset.stemmaHouse));
      for (const house of houses) {
        await page.click(`[data-stemma-house="${house}"]`);
        await page.waitForTimeout(90);
        const nodes = await page.locator(".stemma-node").count();
        if (nodes < 2) blank.push(`Book ${book + 1} · ${house} (${nodes})`);
      }
    }
    expect(blank, `houses that draw nothing: ${blank.join(", ")}`).toEqual([]);
  });

  test("the plate zooms continuously, by pinch and by slider", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const width = async () => Number(await page.locator("#stemma-svg").getAttribute("width"));

    // A trackpad pinch reaches the page as a wheel event carrying ctrlKey —
    // a browser convention, not a real modifier. Ten small pinches must give
    // ten distinct sizes, or the zoom is stepped and this is a lie.
    const sizes = [];
    for (let step = 0; step < 8; step += 1) {
      await page.evaluate(() => {
        const scroll = document.querySelector(".stemma-scroll");
        const box = scroll.getBoundingClientRect();
        scroll.dispatchEvent(new WheelEvent("wheel", {
          deltaY: 16, ctrlKey: true, bubbles: true, cancelable: true,
          clientX: box.left + box.width / 2, clientY: box.top + box.height / 2
        }));
      });
      sizes.push(await width());
    }
    expect(new Set(sizes).size).toBeGreaterThanOrEqual(7);
    expect(sizes[sizes.length - 1]).toBeLessThan(sizes[0]);

    // The slider is the same number, exposed for a reader with no trackpad.
    await page.evaluate(() => {
      const range = document.querySelector("#stemma-zoom-range");
      range.value = "70";
      range.dispatchEvent(new Event("input", { bubbles: true }));
    });
    await expect(page.locator("#stemma-zoom-note")).toHaveText("70%");

    // A plain two-finger scroll is panning, and must not zoom.
    const held = await width();
    await page.evaluate(() => {
      document.querySelector(".stemma-scroll").dispatchEvent(
        new WheelEvent("wheel", { deltaY: 120, bubbles: true, cancelable: true }));
    });
    expect(await width()).toBe(held);
  });

  test("a whole house can be drawn back from and fitted to the plate", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const svg = page.locator("#stemma-svg");
    const width = async () => Number(await svg.getAttribute("width"));

    const full = await width();
    await page.locator('[data-stemma-zoom="out"]').click();
    const drawnBack = await width();
    expect(drawnBack).toBeLessThan(full);

    // The zoom is the reader's, so it survives changing what is charted.
    await page.locator('[data-stemma-scope="house"]').click();
    await page.waitForTimeout(500);
    const natural = Number(await svg.getAttribute("data-natural-width"));
    expect(natural).toBeGreaterThan(full);
    expect(await width()).toBeLessThan(natural);

    await page.locator('[data-stemma-zoom="fit"]').click();
    await page.waitForTimeout(400);
    const plate = await page.locator(".stemma-scroll").evaluate(node => node.clientWidth);
    expect(await width()).toBeLessThanOrEqual(plate + 2);
    // Fitting must not drop anyone from the chart.
    expect(await page.locator("[data-stemma-figure]").count()).toBeGreaterThan(40);
  });
});

test.describe("pliant panes at 1440x900", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("the reading panel can be resized, kept, and reset", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);

    const grip = page.locator(".pane-grip--hero");
    const console_ = page.locator("#reading-console");
    await expect(grip).toBeVisible();
    const before = (await console_.boundingBox()).width;

    const box = await grip.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + 300);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 - 150, box.y + 300, { steps: 10 });
    await page.mouse.up();
    const widened = (await console_.boundingBox()).width;
    expect(widened).toBeGreaterThan(before + 100);

    // A separator is only usable by everyone if the keyboard drives it too.
    await grip.focus();
    await page.keyboard.press("ArrowRight");
    expect((await console_.boundingBox()).width).toBeLessThan(widened);
    await expect(grip).toHaveAttribute("aria-valuenow", /\d+/);

    // The choice survives a reload, and a double-click gives the default back.
    const kept = (await console_.boundingBox()).width;
    await page.reload();
    await settle(page);
    expect(Math.round((await console_.boundingBox()).width)).toBe(Math.round(kept));
    await page.locator(".pane-grip--hero").dblclick();
    expect(Math.round((await console_.boundingBox()).width)).toBe(Math.round(before));
  });

  test("the stemma stage gives width between its three panes", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const list = page.locator(".stemma-list-wrap");
    const before = (await list.boundingBox()).width;
    const grip = page.locator(".pane-grip--list");
    const box = await grip.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + 150);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 - 90, box.y + 150, { steps: 8 });
    await page.mouse.up();
    expect((await list.boundingBox()).width).toBeGreaterThan(before + 50);
  });
});

/*
 * The chart. Its promises are testable ones: the geography is honest, no two
 * names overprint, and closing on a coast reveals names rather than enlarging
 * them — which is the whole reason names are dropped in the first place.
 */
test.describe("the sea chart at 1440x900", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  async function openChart(page) {
    await page.goto("/#chart");
    await settle(page);
    await page.waitForSelector("[data-chart-place]", { state: "attached" });
    await page.waitForTimeout(400);
  }

  test("draws the poem's places on a projected coast", async ({ page }) => {
    await openChart(page);
    // The register carries the whole gazetteer; the sheet carries what its
    // scale can hold. Those are deliberately different numbers.
    expect(await page.locator("[data-chart-index]").count()).toBeGreaterThan(130);
    expect(await page.locator("[data-chart-place]").count()).toBeGreaterThan(20);
    // The places the poem names that no chart can carry get their own register.
    expect(await page.locator("[data-chart-other]").count()).toBeGreaterThan(3);
    await expect(page.locator(".land-mass")).toHaveCount(1);
    await expect(page.locator(".compass-rose")).toHaveCount(1);
    expect(await page.locator(".rhumb").count()).toBeGreaterThan(20);
  });

  test("every book's places are on the chart", async ({ page }) => {
    await openChart(page);
    // Breadth is the point: a book whose ground the gazetteer barely covers is
    // a book the reader cannot place. Ten is the floor, and Book XII — a war
    // fought in one spot — is the thinnest in the poem.
    for (let book = 1; book <= 15; book += 1) {
      await page.selectOption("#chart-book-select", String(book));
      await page.waitForTimeout(120);
      const count = await page.locator("[data-chart-index]").count();
      expect(count, `Book ${book} places`).toBeGreaterThanOrEqual(10);
    }
  });

  test("the sheet thins to what its scale can carry, and names nothing twice", async ({ page }) => {
    await openChart(page);
    // Marks and names are two systems — a country's capitals and a town's
    // italic — and the whole chart is a lie if either prints through the other.
    const collisions = async () => page.evaluate(() => {
      const boxes = [...document.querySelectorAll(".chart-mark-label, .chart-territory-name")]
        .map(node => node.getBoundingClientRect()).filter(box => box.width > 0);
      let hits = 0;
      for (let a = 0; a < boxes.length; a += 1)
        for (let b = a + 1; b < boxes.length; b += 1) {
          const across = Math.min(boxes[a].right, boxes[b].right) - Math.max(boxes[a].left, boxes[b].left);
          const down = Math.min(boxes[a].bottom, boxes[b].bottom) - Math.max(boxes[a].top, boxes[b].top);
          if (across > 1 && down > 1) hits += 1;
        }
      return hits;
    });

    for (const plate of ["world", "aegean", "italy", "asia", "africa"]) {
      await page.click(`[data-chart-plate="${plate}"]`);
      await page.waitForTimeout(700);
      expect(await collisions(), `overprints on the ${plate} plate`).toBe(0);
    }
  });

  test("a plate goes to its own ground", async ({ page }) => {
    await openChart(page);
    const centre = async () => page.evaluate(() => {
      const svg = document.querySelector("#chart-svg");
      const matrix = document.querySelector("#chart-viewport").getScreenCTM().inverse();
      const box = svg.getBoundingClientRect();
      const point = svg.createSVGPoint();
      point.x = (box.left + box.right) / 2;
      point.y = (box.top + box.bottom) / 2;
      const middle = point.matrixTransform(matrix);
      return [middle.x, middle.y];
    });

    // The centring maths once mixed the pane's pixels into a transform read as
    // viewBox units, so asking for Greece landed on Italy. Aim and hit.
    await page.click('[data-chart-plate="aegean"]');
    await page.waitForTimeout(800);
    const [aegeanX] = await centre();
    await page.click('[data-chart-plate="italy"]');
    await page.waitForTimeout(800);
    const [italyX] = await centre();
    expect(aegeanX).toBeGreaterThan(italyX + 80);
  });

  test("the register can be searched", async ({ page }) => {
    await openChart(page);
    const all = await page.locator("[data-chart-index]").count();
    await page.fill("#chart-filter", "orpheus");
    await page.waitForTimeout(200);
    const found = await page.locator("[data-chart-index]").count();
    expect(found).toBeGreaterThan(2);
    expect(found).toBeLessThan(all);
    // Searching a figure finds the ground he walks, not merely a name match.
    const names = await page.locator("#chart-index .chart-index-name").allTextContents();
    expect(names).toContain("Taenarum");
  });

  test("the land is land and the sea is sea", async ({ page }) => {
    await openChart(page);
    // Clipping the coast to the frame once inverted the fill, and the chart
    // rendered a vellum Mediterranean with navy continents. Hit-testing known
    // geography is the only check that would have caught it.
    const probes = await page.evaluate(() => {
      const svg = document.querySelector("#chart-svg");
      const box = svg.getBoundingClientRect();
      const view = svg.viewBox.baseVal;
      // Look past the furniture. A mark's hit-circle or a name sits on top of
      // the ground at plenty of points, and the question here is what the
      // ground *is* — so the probe takes the whole stack and finds the first
      // element that is one of the three answers.
      const ground = new Set(["land-mass", "sea-ground", "chart-territory-wash"]);
      const at = ([cx, cy]) => {
        const stack = document.elementsFromPoint(
          box.left + (cx / view.width) * box.width,
          box.top + (cy / view.height) * box.height
        );
        const hit = stack.find(element => ground.has(element.classList[0]));
        return hit ? hit.classList[0] : "none";
      };
      return { sahara: at([430, 620]), anatolia: at([700, 330]), ionian: at([470, 430]) };
    });
    // A territory wash is only ever drawn clipped to the coast, so hitting one
    // proves land just as well as hitting the landmass beneath it.
    const isLand = hit => hit === "land-mass" || hit === "chart-territory-wash";
    expect(isLand(probes.sahara), `sahara hit ${probes.sahara}`).toBe(true);
    expect(isLand(probes.anatolia), `anatolia hit ${probes.anatolia}`).toBe(true);
    expect(probes.ionian).toBe("sea-ground");
  });

  test("no two names overprint, and closing on a coast reveals more", async ({ page }) => {
    await openChart(page);
    const collisions = async () => page.evaluate(() => {
      const boxes = [...document.querySelectorAll(".chart-mark-label")]
        .map(node => node.getBoundingClientRect());
      let hits = 0;
      for (let a = 0; a < boxes.length; a += 1) {
        for (let b = a + 1; b < boxes.length; b += 1) {
          if (boxes[a].left < boxes[b].right && boxes[a].right > boxes[b].left
            && boxes[a].top < boxes[b].bottom && boxes[a].bottom > boxes[b].top) hits += 1;
        }
      }
      return hits;
    });

    const before = await page.locator(".chart-mark-label").count();
    expect(await collisions()).toBe(0);

    for (let step = 0; step < 3; step += 1) {
      await page.locator('[data-chart-zoom="in"]').click();
      await page.waitForTimeout(420);
    }
    const after = await page.locator(".chart-mark-label").count();
    expect(after).toBeGreaterThan(before);
    expect(await collisions()).toBe(0);
  });

  test("a place carries what it is, its culture, its books and its people", async ({ page }) => {
    await openChart(page);
    await page.locator('[data-chart-index="Thebes"]').click();
    await expect(page.locator(".chart-place-name")).toHaveText("Thebes");
    await expect(page.locator(".chart-place-what")).not.toBeEmpty();
    await expect(page.locator(".chart-place")).toContainText("Its culture");
    expect(await page.locator("[data-chart-episode]").count()).toBeGreaterThan(3);
    expect(await page.locator("[data-chart-figure]").count()).toBeGreaterThan(3);
    expect(await page.locator("[data-chart-book]").count()).toBeGreaterThan(1);
  });

  /*
   * A country is not a dot. The territory pass is what turns a scatter of
   * marks into a map: the ground a region held, lettered across it at a size
   * derived from that ground.
   */
  test("territories are drawn as land and lettered across it", async ({ page }) => {
    await openChart(page);
    expect(await page.locator(".chart-territory").count()).toBeGreaterThan(15);
    const names = await page.locator(".chart-territory-name").count();
    expect(names).toBeGreaterThan(6);

    // Type size is derived from the territory's own width, so a big country
    // must letter bigger than a small one.
    const sizes = await page.evaluate(() => {
      const read = name => {
        const node = [...document.querySelectorAll(".chart-territory-name")]
          .find(item => item.dataset.chartTerritoryName === name);
        return node ? parseFloat(getComputedStyle(node).fontSize) : null;
      };
      return { libya: read("Libya"), arcadia: read("Arcadia") };
    });
    if (sizes.libya && sizes.arcadia) expect(sizes.libya).toBeGreaterThan(sizes.arcadia);
  });

  test("the key is drawn in the chart's own hand, with a scale", async ({ page }) => {
    await openChart(page);
    expect(await page.locator("#chart-key-list li").count()).toBeGreaterThan(6);
    // The legend glyph must be the same path the chart draws, not a redrawing.
    expect(await page.locator("#chart-key-list .chart-mark-glyph").count()).toBeGreaterThan(5);
    await expect(page.locator("#chart-scale-bar .scale-figure").last()).toContainText("Roman miles");
  });

  test("hovering a place says what happens there", async ({ page }) => {
    await openChart(page);
    await expect(page.locator("#chart-whisper")).toBeHidden();
    await page.locator("[data-chart-place]").first().dispatchEvent("pointerenter");
    await expect(page.locator("#chart-whisper")).toBeVisible();
    await expect(page.locator("#chart-whisper b")).not.toBeEmpty();
    await expect(page.locator("#chart-whisper span")).not.toBeEmpty();
  });

  test("journeys draw the routes the poem traces", async ({ page }) => {
    await openChart(page);
    await expect(page.locator(".chart-route")).toHaveCount(0);
    await page.locator('[data-chart-layer="journeys"]').click();
    await page.waitForTimeout(300);
    expect(await page.locator(".chart-route").count()).toBeGreaterThan(5);
    expect(await page.locator(".chart-route-stop").count()).toBeGreaterThan(20);
  });

  // Every direction of the index has to be traversable, or the gazetteer is a
  // dead end: a place lists its figures, and a figure lists its places back.
  test("chart, folio and dossier link in both directions", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator('[data-ring-kind="episode"][data-ring-index="2"]').click();
    await expect(page.locator("#focus-folio-title")).toHaveText("Lycaon");
    expect(await page.locator("#focus-folio-where [data-goto-place]").count()).toBeGreaterThan(0);

    await page.locator("#focus-folio-where [data-goto-place]").first().click();
    await page.waitForTimeout(900);
    await expect(page.locator("body")).toHaveAttribute("data-workspace", "chart");
    await expect(page.locator(".chart-place-name")).not.toBeEmpty();

    await page.locator("[data-chart-figure]").first().click();
    await expect(page.locator("#figure-sheet")).toHaveAttribute("aria-hidden", "false");
    expect(await page.locator("#figure-places [data-goto-place]").count()).toBeGreaterThan(0);
  });
});

test.describe("reduced motion", () => {
  test.use({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });

  test("panels still open and close without rotation choreography", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator('[data-ring-kind="episode"][data-ring-index="2"]').click();
    await expect(page.locator("#focus-folio")).toHaveAttribute("aria-hidden", "false");
    await page.keyboard.press("Escape");
    await expect(page.locator("#focus-folio")).toHaveAttribute("aria-hidden", "true");
  });
});

test.describe("at 200% zoom", () => {
  // 200% browser zoom halves the CSS viewport; the instrument must stay sharp
  // and the text must stay text.
  test.use({ viewport: { width: 768, height: 512 } });

  test("the instrument remains a vector and the console remains readable", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    // Sharpness at zoom comes from the instrument being a viewBox-scaled SVG
    // rather than a bitmap, so that is what is asserted.
    const volvelle = page.locator("#volvelle");
    const box = await volvelle.boundingBox();
    expect(box.width).toBeGreaterThan(150);
    await expect(volvelle).toHaveAttribute("viewBox", "0 0 800 800");
    expect(await volvelle.evaluate(node => node.tagName.toLowerCase())).toBe("svg");
    await expect(page.locator("#console-title")).toBeVisible();
    await expect(page).toHaveScreenshot("zoom200-768x512.png");
  });
});

test.describe("genealogy correctness at 1440x900", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  /** Every node's chart position and the generation it declares to a reader. */
  async function readChart(page) {
    return page.locator("[data-stemma-figure]").evaluateAll(items =>
      items.map(item => {
        const [, x, y] = /translate\(([-\d.]+) ([-\d.]+)\)/.exec(item.getAttribute("transform"));
        return {
          name: item.dataset.stemmaFigure,
          generation: Number(/generation (\d+)/.exec(item.getAttribute("aria-label"))?.[1]),
          x: Number(x),
          y: Number(y)
        };
      })
    );
  }

  test("rows mean generations, and a founder never shares one with a grandchild", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    await page.locator("#stemma-book-select").selectOption("2");
    await page.locator('[data-stemma-house="cadmus"]').click();

    // Every node reports its generation in its accessible name, so the
    // invariant can be checked from the outside rather than from the layout.
    const nodes = await readChart(page);

    const generationOf = name => nodes.find(node => node.name === name)?.generation;
    expect(generationOf("Cadmus")).toBe(0);
    expect(generationOf("Autonoe")).toBe(1);
    expect(generationOf("Actaeon")).toBe(2);
    expect(generationOf("Pentheus")).toBe(2);

    // Harmonia is Cadmus's wife, not his child: same row, not the next one.
    expect(generationOf("Harmonia")).toBe(0);

    // One row per generation, and rows descend in generation order.
    const rowOf = new Map();
    nodes.forEach(node => {
      const seen = rowOf.get(node.generation) ?? node.y;
      expect(node.y).toBe(seen);
      rowOf.set(node.generation, node.y);
    });
    const ordered = [...rowOf.entries()].sort((a, b) => a[0] - b[0]).map(entry => entry[1]);
    for (let index = 1; index < ordered.length; index += 1) {
      expect(ordered[index]).toBeGreaterThan(ordered[index - 1]);
    }

    // No figure is drawn twice, however many parents it has in the chart.
    expect(new Set(nodes.map(node => node.name)).size).toBe(nodes.length);
  });

  /*
   * The collision invariant. This is the one the radial chart could not hold:
   * medallions were placed by an angle and then overlapped whenever a ring got
   * crowded. Placement is now clamped against each neighbour, so it holds by
   * construction — and this asserts it across every house and both scopes,
   * including the densest chart in the poem.
   */
  test("no two figures overlap, in any house, at any scope", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const diameter = 60;

    for (const book of ["0", "2", "7", "10", "14"]) {
      await page.locator("#stemma-book-select").selectOption(book);
      for (const scope of ["book", "house"]) {
        await page.locator(`[data-stemma-scope="${scope}"]`).click();
        const nodes = await readChart(page);
        expect(nodes.length).toBeGreaterThan(1);
        expect(new Set(nodes.map(node => node.name)).size).toBe(nodes.length);

        let closest = Infinity;
        let pair = "";
        for (let a = 0; a < nodes.length; a += 1) {
          for (let b = a + 1; b < nodes.length; b += 1) {
            const gap = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y) - diameter;
            if (gap < closest) {
              closest = gap;
              pair = `${nodes[a].name} × ${nodes[b].name}`;
            }
          }
        }
        expect(closest, `book ${book} / ${scope}: ${pair}`).toBeGreaterThan(0);
      }
    }
  });

  test("a chart draws marriages, brackets, and a generation rubric", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    await page.locator("#stemma-book-select").selectOption("2");
    await page.locator('[data-stemma-house="olympian"]').click();

    // Descent and marriage are different marks; without both the chart is a
    // scatter of portraits with lines between them.
    expect(await page.locator("#stemma-edges .stemma-descent").count()).toBeGreaterThan(0);
    expect(await page.locator("#stemma-edges .stemma-union").count()).toBeGreaterThan(0);

    // One rubric per row, naming the generation the row stands for.
    const rows = await page.locator("#stemma-rubric .stemma-row").count();
    const key = await page.locator("#stemma-key li").count();
    expect(rows).toBe(key);
    await expect(page.locator("#stemma-rubric .stemma-row-mark").first()).toHaveText("Founders");
  });

  // Focus rather than hover: a wide house scrolls sideways, so which nodes are
  // under the pointer depends on the scroll position. Both gestures run the
  // same tracer, and focus is the one every reader can reach.
  test("reaching a figure lights its line and dims the rest", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const node = page.locator("[data-stemma-figure]").first();
    const name = await node.getAttribute("data-stemma-figure");
    await node.focus();
    await expect(page.locator("#stemma-svg")).toHaveClass(/is-tracing/);
    await expect(page.locator(`[data-stemma-figure="${name}"]`)).toHaveClass(/is-on-line/);
    // Something has to be dimmed, or the trace is telling the reader nothing.
    expect(await page.locator("#stemma-nodes .stemma-node:not(.is-on-line)").count()).toBeGreaterThan(0);
    await node.blur();
    await expect(page.locator("#stemma-svg")).not.toHaveClass(/is-tracing/);
  });

  test("every genealogy node carries a portrait, not an empty disc", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    const nodeCount = await page.locator("[data-stemma-figure]").count();
    const imageCount = await page.locator("#stemma-nodes image").count();
    expect(imageCount).toBe(nodeCount);
    const box = await page.locator("#stemma-nodes image").first().evaluate(node => node.getBBox().width);
    expect(box).toBeGreaterThan(20);
  });

  test("the master genealogy holds every named figure", async ({ page }) => {
    await page.goto("/#stemma");
    await settle(page);
    await page.locator('[data-stemma-scope="poem"]').click();
    await expect(page.locator("#master-genealogy")).toBeVisible();
    const cards = await page.locator("[data-master-figure]").count();
    // Against the number the view states, not against a literal. A hardcoded
    // count fails the moment the registry gains a figure it was missing —
    // which is a green light being reported as a regression.
    const summary = await page.locator("#master-summary").textContent();
    const claimed = Number(summary.match(/All (\d+) named figures/)?.[1]);
    expect(claimed).toBeGreaterThan(300);
    expect(cards).toBe(claimed);
    await page.locator("#master-filter").fill("Cadmus");
    await expect(page.locator("[data-master-figure]").first()).toBeVisible();
    const filtered = await page.locator("[data-master-figure]").count();
    expect(filtered).toBeGreaterThan(0);
    expect(filtered).toBeLessThan(cards);
  });

  test("ring labels are real curved text and are not truncated", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    const labels = await page.locator("#episode-ring textPath").allTextContents();
    expect(labels.length).toBeGreaterThan(4);
    expect(labels.some(label => label.includes("…"))).toBe(false);
    expect(labels).toContain("Apollo & Daphne");
  });

  /*
   * The plain register. This exists because the interpretive readings kept
   * leaving the plot to inference — the Lycaon entry described a man who
   * "tries to speak and produces a howl" and never used the word wolf.
   */
  test("every episode states what happens, and names the transformation", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator('[data-ring-kind="episode"][data-ring-index="2"]').click();
    await expect(page.locator("#focus-folio-title")).toHaveText("Lycaon");

    const beats = page.locator("#focus-folio-beats li");
    expect(await beats.count()).toBeGreaterThan(4);
    await expect(page.locator("#focus-folio-beats")).toContainText("wolf");
    // The change itself is marked, not merely mentioned somewhere in the prose.
    await expect(page.locator("#focus-folio-beats li b")).toContainText("wolf");

    // A different book, to prove the register is not a one-off for Book I.
    await page.keyboard.press("Escape");
    await page.locator('[data-hero-book="2"]').click();
    await page.locator('[data-ring-kind="episode"][data-ring-index="1"]').click();
    await expect(page.locator("#focus-folio-title")).toHaveText("Actaeon");
    await expect(page.locator("#focus-folio-beats li b")).toContainText("stag");
    // Coverage across all 120 episodes is asserted by scripts/check-beats.mjs,
    // which can read the data directly instead of clicking through the wheel.
  });

  test("episode and book carry the second analytical register", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await expect(page.locator("#console-voices")).not.toBeEmpty();
    await expect(page.locator("#console-crux")).not.toBeEmpty();
    await page.locator('[data-ring-kind="episode"][data-ring-index="5"]').click();
    await expect(page.locator("#focus-folio-sources")).not.toBeEmpty();
    await expect(page.locator("#focus-folio-craft")).not.toBeEmpty();
    await expect(page.locator("#focus-folio-afterlife")).not.toBeEmpty();
  });
});
