import { ImageResponse } from "next/og";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale } from "@/content/dictionaries/i18n-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = isLocale(locale) ? await getDictionary(locale) : await getDictionary("en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#111318",
          color: "#f0f0f0",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a8c4db",
            marginBottom: 24,
          }}
        >
          Buenos Aires, Argentina
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1, marginBottom: 24 }}>
          Valentin Zandoli
        </div>
        <div style={{ fontSize: 32, color: "#888888", maxWidth: 800 }}>{dict.meta.description}</div>
      </div>
    ),
    { ...size }
  );
}
