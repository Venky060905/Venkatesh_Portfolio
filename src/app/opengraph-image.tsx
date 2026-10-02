import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Full Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#09090b",
          color: "#fafafa",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(129,140,248,0.35), transparent 55%)",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa" }}>{profile.name}</div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          Full Stack Developer building AI-powered web applications
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#22d3ee" }}>
          Next.js · TypeScript · FastAPI · PostgreSQL
        </div>
      </div>
    ),
    size,
  );
}
