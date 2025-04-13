import "../../styles/menu/MenuItem.css";
import type { MenuItemProps } from "@/types/menu/MenuItemProps";

export default function MenuItems({
	icon,
	label,
	color,
	className,
}: MenuItemProps) {
	return (
		<div className={className}>
			{icon}
			<p className="items-label" style={{ color }}>
				{label}
			</p>
		</div>
	);
}
