import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolioData";

export const alt = "Isabella Carranzani Borot, Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { name, title, tagline } = portfolioData.personal;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "linear-gradient(135deg, #042f2e 0%, #1e1b4b 100%)",
        color: "white",
      }}
    >
      <div style={{ display: "flex", fontSize: 32, color: "#2dd4bf" }}>
        {title}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 700,
          marginTop: 16,
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          color: "#d4d4d8",
          marginTop: 24,
        }}
      >
        {tagline}
      </div>
      <div
        style={{
          display: "flex",
          width: 160,
          height: 8,
          borderRadius: 4,
          marginTop: 48,
          background: "linear-gradient(90deg, #2dd4bf, #a78bfa)",
        }}
      />
    </div>,
    size,
  );
}
