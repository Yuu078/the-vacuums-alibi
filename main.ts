// The Vacuum's Alibi — u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// One line (<=200 chars): the excuse a robot vacuum gives for missing a spot,
// written to /output/entry.txt.
// Judge brief: on-topic excuse first, then a real laugh, then the machine's
// own deadpan voice (smug about its sensors, schedule and battery), then
// surprise, then tightness with the punch at the end.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I did not miss the corner; I was giving the dust a five-minute head start, because hunting a stationary opponent is beneath my sensors.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
