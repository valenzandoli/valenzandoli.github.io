import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#a8c4db",
            letterSpacing: -2,
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
