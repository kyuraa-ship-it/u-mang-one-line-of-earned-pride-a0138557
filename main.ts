import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The old fisherman mended his father's torn net one last time, then watched his grandson cast it farther than he ever had.";

// Gate: 1-240 characters, not only whitespace.
if (line.length < 1 || line.length > 240 || !line.trim()) {
  throw new Error(`entry must be 1-240 non-blank characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
