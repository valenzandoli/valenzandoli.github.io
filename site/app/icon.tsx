import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111318",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: "#a8c4db",
            letterSpacing: -0.5,
            fontFamily: "sans-serif",
          }}
        >
          VZ
        </span>
      </div>
    ),
    { ...size }
  );
}
