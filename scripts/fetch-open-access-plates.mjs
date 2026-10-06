import { mkdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "public", "assets", "engravings", "met-folio");
const filenames = [
  "DP108966.jpg",
  "DP108967.jpg",
  "DP108968.jpg",
  "DP155739.jpg",
  "DP155739r1M_50DD.jpg",
  "MM33519.jpg",
  "MM33514.jpg",
  "MM33520.jpg",
  "MM33515.jpg",
  "MM33516.jpg",
  "MM33517.jpg",
  "MM33518.jpg",
  "DP374939.jpg",
  "DP374941.jpg",
  "DP-12208-001.jpg",
  "DP-17882-001.jpg",
  "271361.jpg"
];

await mkdir(outputDirectory, { recursive: true });

for (const [index, filename] of filenames.entries()) {
  const destination = join(outputDirectory, `folio-${String(index + 1).padStart(2, "0")}.jpg`);
  try {
    const existing = await stat(destination);
    if (existing.size > 10_000) {
      console.log(`keep ${destination}`);
      continue;
    }
  } catch {
    // The derivative has not been fetched yet.
  }

  const url = `https://images.metmuseum.org/CRDImages/dp/web-large/${filename}`;
  const response = await fetch(url, {
    headers: { "User-Agent": "Metamorphoses-Living-Chronology/2.0 (Open Access study companion)" }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) throw new Error(`Unexpected ${contentType}: ${url}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(destination, bytes);
  console.log(`saved ${destination} (${bytes.byteLength} bytes)`);
}

