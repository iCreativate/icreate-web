import { loadApps, shortTitle, type AppStatus, type CraftApp } from "@/lib/apps";

export type AdobeRow = {
  adobe: string;
  product?: string;
  icreate: string;
  app: CraftApp | null;
  status: AppStatus | "none";
  note: string;
};

const NOTES: Record<string, string> = {
  photocraft:
    "Closest match for retouching, compositing and export. Layers and common tools exist; do not expect every Photoshop filter, Camera Raw panel or Creative Cloud library.",
  vectorcraft:
    "Closest match for logos, icons and print-ready vectors. Pen tool and type will feel different. Not an Illustrator clone.",
  filmcraft:
    "Timeline editing, colour and sound. Fine for cuts and grades in beta; advanced captions, team projects and every Premiere effect are not promised.",
  lightcraft:
    "Library + raw development. Good for culling and basic grades. Not Lightroom Classic with years of catalogue plugins.",
  pdfcraft:
    "Read, organise and protect PDFs. Form designer and every Acrobat Pro prepress tool are not all here yet.",
  effectcraft:
    "Motion graphics and compositing, still an early preview. Do not migrate a client After Effects job here yet.",
  designcraft:
    "Page layout. Alpha: try it on a flyer, not a 200-page magazine with a print deadline.",
  figcraft:
    "Interface design. Adobe XD itself is discontinued; this is our stand-in, still alpha.",
  soundcraft:
    "Record, edit and mix. Usable in beta; not a full Audition/Pro Tools replacement.",
  texturecraft:
    "3D texture painting. Alpha — expect missing brushes and incomplete material export.",
  materialcraft:
    "Procedural materials. Alpha — a sandbox, not Substance Designer parity.",
  "craft-anything":
    "Generative / exploratory tools. Firefly it is not. Alpha, and it will change.",
};

const ADOBE_ORDER = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe Lightroom",
  "Adobe Acrobat",
  "Adobe After Effects",
  "Adobe InDesign",
  "Adobe XD",
  "Adobe Audition",
  "Adobe Substance 3D Painter",
  "Adobe Substance 3D Designer",
  "Adobe Firefly",
];

const MISSING: AdobeRow[] = [
  {
    adobe: "Adobe Animate",
    icreate: "None yet",
    app: null,
    status: "none",
    note: "No timeline animation / Flash-style authoring app in the suite.",
  },
  {
    adobe: "Adobe Dreamweaver",
    icreate: "None yet",
    app: null,
    status: "none",
    note: "iCreate is not a web IDE. Use a code editor.",
  },
  {
    adobe: "Adobe Character Animator",
    icreate: "None yet",
    app: null,
    status: "none",
    note: "No puppet / performance-capture app yet.",
  },
  {
    adobe: "Adobe Fresco",
    icreate: "iCreate Photo (partial)",
    app: null,
    status: "none",
    note: "No dedicated live-brush / iPad drawing app. Photo can open raster work; it is not Fresco.",
  },
  {
    adobe: "Adobe Media Encoder",
    icreate: "iCreate Video (partial)",
    app: null,
    status: "none",
    note: "No standalone watch-folder encoder. Export from Video when you can.",
  },
];

export function adobeRows(): AdobeRow[] {
  const apps = loadApps();
  const mapped: AdobeRow[] = ADOBE_ORDER.map((adobe) => {
    const app = apps.find((item) => item.replaces === adobe) ?? null;
    if (!app) {
      return {
        adobe,
        icreate: "None yet",
        app: null,
        status: "none" as const,
        note: "No iCreate equivalent in the current catalogue.",
      };
    }
    return {
      adobe,
      icreate: shortTitle(app),
      app,
      status: app.status,
      note: NOTES[app.id] ?? STATUS_FALLBACK(app.status),
    };
  });
  return [...mapped, ...MISSING];
}

function STATUS_FALLBACK(status: AppStatus) {
  if (status === "alpha") {
    return "Early preview only. Do not bet a client deadline on it.";
  }
  if (status === "beta") {
    return "Usable, with gaps. Learn the iCreate names and save often.";
  }
  if (status === "planned" || status === "research") {
    return "In the catalogue only — no installer yet.";
  }
  return "Available in the launcher.";
}

export function officeRows() {
  const wanted = ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"];
  return loadApps().filter(
    (app) => app.replaces && wanted.includes(app.replaces),
  );
}
