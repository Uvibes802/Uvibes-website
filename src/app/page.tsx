"use client";

import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";

export default function Home() {
	return (
		<div>
			<h1>Hello World</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
			</p>
			<AppointmentSection />
			<FloatingMenu />
		</div>
	);
}
