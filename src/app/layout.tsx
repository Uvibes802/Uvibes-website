import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Uvibes",
	description:
		"Uvibes est une application web dédiée aux échanges vidéo autour de thématiques variées...",
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
