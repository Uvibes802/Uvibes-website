import {
	AlignJustify,
	Bold,
	CalendarDays,
	House,
	ListCheck,
	Newspaper,
	Puzzle,
	Users,
	X,
} from "lucide-react";

export const menuItems = [
	{
		id: 1,
		icon: <House size={32} color="#78C751" />,
		label: "Accueil",
		color: "#78C751",
	},
	{
		id: 2,
		icon: <Puzzle size={32} color="#D90A5C" />,
		label: "Fonctionnalités",
		color: "#D90A5C",
	},
	{
		id: 3,
		icon: <ListCheck size={32} color="#32BDCA" />,
		label: "Avantages",
		color: "#32BDCA",
	},
	{
		id: 4,
		icon: <Users size={32} color="#FD6E00" />,
		label: "Uvibes",
		color: "#FD6E00",
	},
	{
		id: 5,
		icon: <Newspaper size={32} color="#78C751" />,
		label: "Blog",
		color: "#78C751",
	},
	{
		id: 6,
		icon: <CalendarDays size={32} color="#D90A5C" />,
		label: "Prendre RDV",
		color: "#D90A5C",
	},
];
