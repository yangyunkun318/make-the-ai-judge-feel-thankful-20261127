// Writes the entry text to /output/entry.txt.
//
// Node 22, standard library only. The output directory is /output by
// default; set MAKEFUN_OUTPUT_DIR to write somewhere else for a local run.
// The text is written byte for byte, with no trailing newline, so the file
// holds exactly the 185 characters below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Thank you for reading each of these slowly, the way a lamp stays lit for the last guest home. Your patience is the quiet room every entry gets to stand in. Thank you for keeping it lit.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
