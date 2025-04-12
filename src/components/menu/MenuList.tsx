import { Items } from "./MenuData";
import MenuItem from "./MenuItem";

type MenuListProps = {
	className: string;
};

export default function MenuList({ className }: MenuListProps) {
	return (
		<>
			{Items.map((item) => (
				<MenuItem key={item.id} {...item} className={className} />
			))}
		</>
	);
}
