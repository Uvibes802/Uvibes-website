export type ButtonProps = {
	title: string;
	type: "button" | "submit" | "reset";
	onClick?: () => void;
};
