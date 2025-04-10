import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFloatButton = styled(Fab)(({ theme }) => ({
	position: "fixed",
	bottom: 0,
	right: 0,
	margin: 16,
	zIndex: 1000,
	backgroundColor: "#ffffff",
	dropshadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",

	[theme.breakpoints.up(768)]: {
		display: "none",
	},
}));
