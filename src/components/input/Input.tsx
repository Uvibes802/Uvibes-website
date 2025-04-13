import type { Inputprops } from "@/types/input/input";
import "../../styles/input/input.css";
export default function Input({
	label,
	type,
	placeholder,
	htmlFor,
}: Inputprops) {
	return (
		<div className="input-container">
			<label htmlFor={htmlFor}>{label}</label>
			<input id={htmlFor} type={type} placeholder={placeholder} />
		</div>
	);
}
