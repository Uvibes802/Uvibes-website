"use client";

import { menuItems } from "@/components/menu/menuItems";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";

import { useState } from "react";
import "../../styles/menu/FloatingMenu.css";

export default function FloatingMenu() {
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
				{isOpen ? (
					<X size={32} color="#32BDCA" />
				) : (
					<AlignJustify size={32} color="#32BDCA" />
				)}
			</StyledFloatButton>
			{isOpen && (
				<div className="menu-items-container">
					{menuItems.map((item) => (
						<div className="menu-items" key={item.id}>
							{item.icon}
							<p className="items-label" style={{ color: item.color }}>
								{item.label}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	);
}
