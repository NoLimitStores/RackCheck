// Contentregel RackCheck: geen zichtbare em dashes (—) of en dashes (–) in de
// copy. Deze check draait vóór elke build en blokkeert de build zodra er een
// insluipt. Vervang door komma, dubbele punt, punt of haakjes.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src";
const offenders = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(tsx?|css|md)$/.test(name)) {
      const lines = readFileSync(path, "utf8").split("\n");
      lines.forEach((line, i) => {
        if (line.includes("—") || line.includes("–")) {
          offenders.push(`${path}:${i + 1}`);
        }
      });
    }
  }
}

walk(ROOT);

if (offenders.length > 0) {
  console.error(
    "BUILD GEBLOKKEERD: em dash of en dash gevonden. Vervang door komma, dubbele punt of punt.\n" +
      offenders.map((o) => `  - ${o}`).join("\n")
  );
  process.exit(1);
}
console.log("Contentcheck: geen em of en dashes gevonden.");
