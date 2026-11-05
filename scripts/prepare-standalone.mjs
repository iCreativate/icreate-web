import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const standalone = join(root, ".next/standalone");

if (!existsSync(standalone)) {
  console.error("No .next/standalone — run next build first.");
  process.exit(1);
}

cpSync(join(root, "public"), join(standalone, "public"), { recursive: true });
mkdirSync(join(standalone, ".next"), { recursive: true });
cpSync(join(root, ".next/static"), join(standalone, ".next/static"), {
  recursive: true,
});
console.log("Prepared standalone server with public/ and .next/static");
