import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNNES Roblox Community — Mabar, Dev, & Event",
  description:
    "Komunitas Roblox mahasiswa UNNES & kreator. Mabar seru, diskusi scripting, dan event kolaborasi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}