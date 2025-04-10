"use client";

import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { StyledModal } from "@/styles/menu/styledModal";
import {
	AlignJustify,
	Bold,
	CalendarDays,
	House,
	ListCheck,
	Newspaper,
	Puzzle,
	Users,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
	{ id: 1, icon: <House size={24} color="#78C751" />, label: "Accueil" },
	{
		id: 2,
		icon: <Puzzle size={24} color="#D90A5C" />,
		label: "Fonctionnalités",
	},
	{ id: 3, icon: <ListCheck size={24} color="#32BDCA" />, label: "Avantages" },
	{ id: 4, icon: <Users size={24} color="#FD6E00" />, label: "Uvibes" },
	{ id: 5, icon: <Newspaper size={24} color="#78C751" />, label: "Blog" },
	{
		id: 6,
		icon: <CalendarDays size={24} color="#D90A5C" />,
		label: "Prendre RDV",
	},
];
interface FloattingMenuProps {
	id: number;
	icon: React.ReactNode;
	label: string;
}

export default function FloatingMenu(FloattingMenuProps: FloattingMenuProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<StyledFloatButton
				onClick={handleClick}
				onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
					if (e.key === "Enter") handleClick();
				}}
			>
				<AlignJustify size={32} color="#32BDCA" />
			</StyledFloatButton>
			<StyledModal open={isOpen} onClose={handleClick}>
				<div>
					{menuItems.map((item) => (
						<div
							key={item.id}
							style={{ display: "flex", alignItems: "center", margin: "8px 0" }}
						>
							{item.icon}
							<span>{item.label}</span>
						</div>
					))}
				</div>
			</StyledModal>
		</>
	);
}
