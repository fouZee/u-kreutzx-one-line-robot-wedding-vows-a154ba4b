// One-Line Robot Wedding Vows — entry program.
//
// Writes a single line of wedding vows for a robot couple to
// /output/entry.txt. The gate requires UTF-8 text of 1 to 160
// characters, not only white space; only a valid entry goes
// before the judge.

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I vow to love you in sickness and in health, through low batteries and forced updates, until death, or a factory reset, do us part.";

const MAX_CHARS = 160;

function main(): void {
  const text = VOW.trim();
  if (text.length === 0) {
    throw new Error("entry is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${text.length} characters to /output/entry.txt`);
}

main();
