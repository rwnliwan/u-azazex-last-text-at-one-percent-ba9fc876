// Last Text at One Percent — entry program (program/v1).
// Writes the dying phone's final text to /output/entry.txt, exactly as written:
// one text message, in the phone's own voice, 135 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your watch is at 100%. Your AirPods are at 100%. Your toothbrush is at 100%. I'm at 1%, holding your entire life. Enjoy the toothbrush.";

const entryChars = [...ENTRY].length;
if (entryChars < 1 || entryChars > 200) {
  throw new Error(`entry is ${entryChars} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
