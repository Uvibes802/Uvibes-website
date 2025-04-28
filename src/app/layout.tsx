import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uvibes",
  description:
    //prettier-ignore
    "Uvibes est une application web dédiée aux échanges vidéo autour de thématiques variées. Elle permet aux utilisateurs de partager leurs expériences et leurs connaissances à travers des discussions enrichissantes. Grâce à Uvibes, apprenez des autres et contribuez à une communauté où le savoir se transmet par l&apos;interaction.",
  icons: {
    icon: "/images/iconUvibes.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
