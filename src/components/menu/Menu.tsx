"use client";
import { StyledBottomNavigation } from "@/styles/menu/StyledBottomNavigation";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { Items } from "./MenuData";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
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
				onKeyDown={(e) => e.key === "Enter" && handleClick()}
			>
				{isOpen ? (
					<X size={32} color="#32BDCA" />
				) : (
					<AlignJustify size={32} color="#32BDCA" />
				)}
			</StyledFloatButton>

			{isOpen && (
				<div className="menu-items-container">
					<MenuList className="menu-items" />
				</div>
			)}

			<StyledBottomNavigation>
				<MenuList className="menu-items-bottom-nav" />
			</StyledBottomNavigation>
		</>
	);
}
