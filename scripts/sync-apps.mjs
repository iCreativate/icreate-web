import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fromLauncher = join(root, "../icreate-launcher/apps.json");
const destDir = join(root, "content");
const dest = join(destDir, "apps.json");

mkdirSync(destDir, { recursive: true });

if (existsSync(fromLauncher)) {
  copyFileSync(fromLauncher, dest);
  console.log("Synced content/apps.json from icreate-launcher/apps.json");
} else if (existsSync(dest)) {
  console.log("Launcher catalogue not found; using committed content/apps.json");
} else {
  console.error(
    "No apps.json found. Copy icreate-launcher/apps.json into content/apps.json.",
  );
  process.exit(1);
}
