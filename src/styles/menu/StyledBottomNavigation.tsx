import { BottomNavigation } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  position: "fixed",
  width: "auto",
  height: "80px",
  justifySelf: "center",
  zIndex: 9999,
  bottom: 0,
  left: "0",
  right: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  marginBottom: "var(--spacing-ref)",
  borderRadius: "calc(var(--border-radius)*2.5)",
  padding: "calc(var(--spacing-ref) * 2)",

  [theme.breakpoints.down(768)]: {
    display: "none",
    width: "100%",
  },
}));
