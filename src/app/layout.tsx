import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-N068M873WC`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N068M873WC');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
