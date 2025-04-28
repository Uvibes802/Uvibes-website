"use client";
import { StyledBottomNavigation } from "@/styles/menu/StyledBottomNavigation";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
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
        <nav className="menu-items-container">
          <MenuList className="menu-items" />
        </nav>
      )}

      <StyledBottomNavigation>
        <MenuList className="menu-items-bottom-nav" />
      </StyledBottomNavigation>
    </>
  );
}
