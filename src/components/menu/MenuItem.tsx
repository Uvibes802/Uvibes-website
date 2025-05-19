import "../../styles/menu/MenuItem.css";
import type { MenuItemProps } from "@/types/menu/MenuItemProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItems({ icon, label, color, link }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      passHref
      className="items-link"
      style={{
        fontWeight: isActive ? 800 : 400,
        transform: isActive ? "scale(1.2)" : "scale(1)",
        transition: "all 0.2s ease",
      }}
    >
      {icon}
      <p className="items-label" style={{ color }}>
        {label}
      </p>
    </Link>
  );
}
