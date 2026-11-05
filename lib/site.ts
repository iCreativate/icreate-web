export const SITE_NAME = "iCreate";
export const SITE_TAGLINE = "Create without limits. No Adobe subscription.";
export const COMPANY = "iCreativate";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://icreate.co.za"
).replace(/\/$/, "");
export const LAUNCHER_REPO =
  process.env.NEXT_PUBLIC_LAUNCHER_REPO ?? "iCreativate/icreate-launcher";
export const GITHUB_RELEASES = `https://github.com/${LAUNCHER_REPO}/releases/latest`;
export const GITHUB_REPO_URL = `https://github.com/${LAUNCHER_REPO}`;
export const ARTCRAFT_LAUNCHER = "https://github.com/storytold/craft-launcher";

export const PRO_MONTHLY_ZAR = 99;
export const PRO_YEARLY_ZAR = 990;

export const ZA_KEYWORDS = [
  "free Photoshop alternative South Africa",
  "Adobe alternative South Africa",
  "free photo editor South Africa",
  "Creative Cloud alternative South Africa",
  "free Illustrator alternative South Africa",
  "free Premiere Pro alternative South Africa",
  "iCreate",
  "iCreativate",
  "creative suite South Africa",
  "PayFast creative software",
] as const;

export function absUrl(path = "/") {
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
}

export function zar(amount: number) {
  return `R${amount}`;
}
