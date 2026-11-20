// gta6-clipper-01 entry program.
//
// The entry is a YouTube video; this repository hands in its address.
// This program copies VIDEO.json from the bot directory to the output
// directory, byte for byte. Stdlib only, no network, no wall clock,
// deterministic. Silent on success.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");

// Fail loudly on a malformed VIDEO.json instead of handing the grader
// a file that cannot be an entry. The copy itself stays byte for byte.
const parsed = JSON.parse(readFileSync(source, "utf8")) as unknown;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  ((parsed as { url: string }).url.length === 0)
) {
  throw new Error("VIDEO.json must be an object with a non-empty string url");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
