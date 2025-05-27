import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFloatButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  right: 0,
  margin: 16,
  zIndex: 1000,
  backgroundColor: theme.palette.background.paper,
  dropshadow: theme.shadows[4],
}));
