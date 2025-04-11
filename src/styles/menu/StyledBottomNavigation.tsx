import { BottomNavigation } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
	position: "fixed",
	bottom: 0,
	left: "50%",
	transform: "translateX(-50%)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "2rem",
	backgroundColor: "#ffffff",
	boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
	marginBottom: "var(--spacing-ref)",
	borderRadius: "calc(var(--border-radius)*2.5)",
	padding: "var(--spacing-ref)",

	[theme.breakpoints.down(768)]: {
		display: "none",
	},
}));
