import "../../styles/menu/MenuItem.css";
import type { MenuItemProps } from "@/types/menu/MenuItemProps";
import Link from "next/link";

export default function MenuItems({
  icon,
  label,
  color,
  link,
  className,
}: MenuItemProps) {
  return (
    <Link href={link} passHref className="items-link">
      {icon}
      <p className="items-label" style={{ color }}>
        {label}
      </p>
    </Link>
  );
}
