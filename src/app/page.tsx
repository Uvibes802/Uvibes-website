"use client";

import FloatingMenu from "@/components/menu/Menu";

import MockupHome from "../../public/images/mockupHome.png";
import { HeroBanner } from "../components/banner/heroBanner";

export default function Home() {
	return (
		<div>
			<HeroBanner
				subtitle=" "
				title="Ouvrir notre esprit à des visions nouvelles"
				description="La première application qui transforme notre perception de l&apos;autre et nous inspire"
				image={MockupHome}
				alt="visuel de l'application"
			/>

			<FloatingMenu />
		</div>
	);
}
