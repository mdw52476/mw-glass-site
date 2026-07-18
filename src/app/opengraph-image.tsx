import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { business } from "@/lib/business";

export const alt = `${business.name} — Mobile Auto Glass, Northeast Ohio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1720",
          padding: 64,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={200} height={200} alt="" />
        <div
          style={{
            marginTop: 36,
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            display: "flex",
          }}
        >
          {business.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#1791C8",
            display: "flex",
          }}
        >
          Mobile Windshield Replacement &amp; Auto Glass — Northeast Ohio
        </div>
      </div>
    ),
    { ...size }
  );
}
