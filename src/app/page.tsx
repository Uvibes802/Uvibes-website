"use client";

import FloatingMenu from "@/components/menu/Menu";
import type { TeamProps } from "@/types/team/teamProps";
import type { StaticImageData } from "next/image";
import delphine from "../../public/images/delphine.jpg";

export default function Home(teamProps: TeamProps) {
	return (
		<div>
			<h1>Hello World</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
			</p>
			<FloatingMenu />
		</div>
	);
}
