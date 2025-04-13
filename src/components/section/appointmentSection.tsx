"use client";
import "../../styles/section/appointmentSection.css";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export function AppointmentSection() {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (!isBrowser) {
		return null;
	}

	return (
		<section className="appointment-section">
			<h3>Découvrez comment Uvibes peut s'adapter à vos besoins</h3>
			<div className="appointment-button">
				<PopupButton
					url="https://calendly.com/justine-cousin-wbx/demo-uvibes" //A remplacer//
					rootElement={document.body}
					text="Parler à un conseiller"
					styles={{
						color: "white",
						background: "var(--gradientColor)",
						borderRadius: "calc(var(--border-radius) * 3)",
						padding: "var(--spacing-ref)",
						border: "none",
						width: "15rem",
						height: "3rem",
						fontFamily: "var(--title-font)",
						fontSize: "calc(var(--font-size-ref) * 1)",
						boxShadow: "1px 3px 10px 0px #0000006b",
					}}
				/>
			</div>
		</section>
	);
}
