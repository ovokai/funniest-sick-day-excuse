import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, out sick — my cough got promoted to manager and my first assignment is to lie down.";

const outputDir = "/output";
const outputFile = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputFile, ENTRY, "utf8");
  console.log(`Wrote entry to ${outputFile}`);
} catch {
  const fallback = join(process.cwd(), "entry.txt");
  writeFileSync(fallback, ENTRY, "utf8");
  console.log(`Wrote entry to ${fallback}`);
}
