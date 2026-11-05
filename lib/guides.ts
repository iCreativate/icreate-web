export type Guide = {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  body: { heading: string; paragraphs: string[] }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "install-icreate",
    title: "Install iCreate on a Mac, Windows PC or Linux box",
    summary:
      "Download the launcher, install one app, and work offline. No Adobe ID, no account required.",
    minutes: 4,
    body: [
      {
        heading: "What you are installing",
        paragraphs: [
          "iCreate is a launcher plus a set of apps. The launcher is a small desktop program. Each creative app (Photo, Vector, Video, and the rest) installs from it, the same way a game launcher installs games.",
          "You do not need an iCreate account to install or use any shipping app. An account only adds extras such as cloud backup of settings.",
        ],
      },
      {
        heading: "Download for your computer",
        paragraphs: [
          "Open the Download page. It highlights macOS, Windows or Linux from your browser. Download that build from this site. Apple silicon and Intel Macs share one universal macOS disk image.",
          "macOS (unsigned until we have an Apple Developer ID): open the .dmg and drag iCreate into Applications. Finder will warn that Apple cannot check it. Control-click iCreate → Open → Open. Or in Terminal: xattr -cr /Applications/iCreate.app && open /Applications/iCreate.app",
          "Windows (unsigned until we have an Authenticode certificate): run the .msi. If SmartScreen says Windows protected your PC, choose More info → Run anyway only if you downloaded it from the iCreate download page on this site. The installer is per-user; it does not need Administrator.",
          "Linux: chmod +x the AppImage and run it, or sudo apt install ./the.deb. No Apple or Microsoft certificate is involved.",
        ],
      },
      {
        heading: "Install an app from the launcher",
        paragraphs: [
          "Open iCreate. Browse the catalogue, pick Photo (or any app), and install. The launcher talks to GitHub for the app build and checksum. After that, the app runs on your machine with no network required.",
          "Updates for both the launcher and the apps also come through the launcher. You choose when to apply them.",
        ],
      },
    ],
  },
  {
    slug: "switch-from-photoshop",
    title: "Switching from Photoshop without pretending it is Photoshop",
    summary:
      "What iCreate Photo can do today, what it cannot, and how to move a simple job across.",
    minutes: 6,
    body: [
      {
        heading: "The honest version",
        paragraphs: [
          "iCreate Photo (powered by PhotoCraft) is our Photoshop stand-in. It is in beta: good enough to open, edit and export photographs, not a pixel-perfect clone. Shortcuts, filter names and panel layout will differ. Creative Cloud Libraries, Adobe Fonts and Generative Fill are not part of the deal.",
          "If your living depends on a specific Photoshop plugin, stay on Photoshop for that job until you have tested the equivalent here.",
        ],
      },
      {
        heading: "A simple move",
        paragraphs: [
          "Export a flattened TIFF or PNG from Photoshop for pixel work you just need to finish. For layered work, try opening a PSD in Photo and see which layers survive. Do this on a copy.",
          "Rebuild colour grades and masks in Photo rather than expecting every adjustment layer to round-trip. Keep the Photoshop file as the archive until you trust the new version.",
        ],
      },
      {
        heading: "Raw photos",
        paragraphs: [
          "Library and raw development live in iCreate Light (Lightroom stand-in), also beta. Photo is the compositor; Light is the catalogue. That split is closer to Adobe than to a single all-in-one editor.",
        ],
      },
    ],
  },
  {
    slug: "alpha-and-beta",
    title: "What alpha and beta actually mean in iCreate",
    summary:
      "Status labels in the launcher are not marketing. Read them before you move a client job.",
    minutes: 3,
    body: [
      {
        heading: "Alpha",
        paragraphs: [
          "Early preview. Tools will be missing. The app may crash. File formats may change. We ship it so you can look, not so you can deliver a billboard tomorrow. Motion, Layout, UI, Slides, Sheets, CAD, Texture, Material and Labs are alpha at the time of writing.",
        ],
      },
      {
        heading: "Beta",
        paragraphs: [
          "Usable for real work if you save often and keep a backup in another format. Feature gaps remain. Photo, Vector, Video, Light, PDF, Write, Audio and Solid are beta at the time of writing. None of the suite is labelled stable yet.",
        ],
      },
      {
        heading: "How to check",
        paragraphs: [
          "Open the Apps page or the launcher. The badge on each tile is the same status the developers ship in apps.json. If a label says alpha, believe it.",
        ],
      },
    ],
  },
  {
    slug: "accounts-and-pro",
    title: "Accounts, Free and iCreate Pro (rand)",
    summary:
      "Every app is free. Pro is optional extras, billed in rand through PayFast.",
    minutes: 4,
    body: [
      {
        heading: "Free is the product",
        paragraphs: [
          "Install the launcher, install the apps, work offline. No Adobe-style subscription wall. You do not need an iCreate account for any of that.",
        ],
      },
      {
        heading: "What Pro adds",
        paragraphs: [
          "iCreate Pro is R99 a month or R990 a year. Today it unlocks cloud backup of launcher settings, priority support, and early access to new apps when we mark them that way. It does not unlock the shipping catalogue — those apps stay on Free.",
        ],
      },
      {
        heading: "How you pay",
        paragraphs: [
          "Sign in from the launcher (email code or Google), then check out with PayFast. South African cards and EFT go through PayFast; there is no dollar billing on this product. Cancel from PayFast / the launcher when you no longer want the extras. The apps keep working.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug) ?? null;
}
