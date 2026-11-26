import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const sentence =
  "That glass had been staring at me all morning, recording my naps for the dog, so I retired it from service before it filed its report.";

if (sentence.length > 200 || sentence.trim().length === 0) {
  throw new Error("entry sentence must be 1-200 characters");
}

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, sentence + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
