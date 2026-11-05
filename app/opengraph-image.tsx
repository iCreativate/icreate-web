import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          color: "#e8edf5",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#38bdf8",
          }}
        >
          icreate.co.za
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {SITE_TAGLINE}
          </div>
          <div style={{ fontSize: 28, color: "rgba(232,237,245,0.7)" }}>
            Free creative suite for South Africa. No Adobe subscription.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
