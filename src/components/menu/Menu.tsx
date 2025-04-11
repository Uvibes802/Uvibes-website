"use client";
import { StyledBottomNavigation } from "@/styles/menu/StyledBottomNavigation";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { Items } from "../menu/Items";
import MenuItems from "./MenuItems";
import "../../styles/menu/Menu.css";

export default function Menu() {
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
					{Items.map((item) => (
						<MenuItems
							id={item.id}
							key={item.id}
							icon={item.icon}
							label={item.label}
							color={item.color}
							className="menu-items"
						/>
					))}
				</div>
			)}

			<StyledBottomNavigation>
				{Items.map((item) => (
					<MenuItems
						id={item.id}
						key={item.id}
						icon={item.icon}
						label={item.label}
						color={item.color}
						className="menu-items-bottom-nav"
					/>
				))}
			</StyledBottomNavigation>
		</>
	);
}
