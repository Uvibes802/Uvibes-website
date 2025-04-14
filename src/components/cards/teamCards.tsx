import Image from "next/image";
import "../../styles/cards/teamCard.css";
import type { TeamProps } from "@/types/team/teamProps";

export default function TeamCards({ image, name, role }: TeamProps) {
	return (
		<article className="team-card">
			<div />
			<Image src={image} alt="team-staff" width={500} height={500} />
			<div className="content-card">
				<p>{name}</p>
				<p>{role}</p>
			</div>
		</article>
	);
}
