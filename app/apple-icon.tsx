import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 40,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          boxShadow: "0 10px 25px rgba(6, 182, 212, 0.5)",
        }}
      >
        SY
      </div>
    ),
    {
      ...size,
    }
  );
}
