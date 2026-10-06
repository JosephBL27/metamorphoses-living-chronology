import { defineConfig } from "@playwright/test";

/*
 * Visual regression for the instrument.
 *
 * The suite starts the Vite dev server itself, so `npm run test:visual` is the
 * only command a reviewer needs. Snapshots live beside the spec and are
 * compared per viewport; the five sizes are the ones the interface actually
 * changes shape at, not an arbitrary sample.
 */
export default defineConfig({
  testDir: "./tests",
  snapshotPathTemplate: "{testDir}/snapshots/{arg}{ext}",
  fullyParallel: true,
  reporter: [["list"]],
  expect: {
    // Font rasterisation differs slightly across machines; a small tolerance
    // keeps the suite honest about layout without failing on antialiasing.
    toHaveScreenshot: { maxDiffPixelRatio: 0.02, animations: "disabled" }
  },
  use: {
    baseURL: "http://127.0.0.1:5183",
    deviceScaleFactor: 1
  },
  webServer: {
    command: "npm run dev -- --port 5183 --strictPort",
    url: "http://127.0.0.1:5183",
    reuseExistingServer: true,
    timeout: 60_000
  }
});
