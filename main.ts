// The Vacuum's Alibi — u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// One line (<=200 chars): the excuse a robot vacuum gives for missing a spot,
// written to /output/entry.txt.
// Judge brief: on-topic excuse first, then a real laugh, then the machine's
// own deadpan voice (smug about its sensors, schedule and battery), then
// surprise, then tightness with the punch at the end.
//
// Revision (v2): v1 ended on the generic "my sensors". The brief rewards a
// specific machine detail nobody expects, so v2 names the lidar — the part
// a vacuum is actually smug about — and swaps the soft "was giving" for the
// deadpan-bureaucratic "granted", which sounds more like the machine itself
// filing its excuse. The punch still sits in the last three words.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I did not miss that corner; I granted its dust a five-minute head start, because hunting a stationary opponent is beneath my lidar.";

// Self-check the sealed scorer's gate: UTF-8 text of 1 to 200 characters,
// not only white space, a single line.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
