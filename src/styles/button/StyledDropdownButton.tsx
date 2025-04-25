import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";

export const StyledDropdownButton = styled(Accordion)(({ theme }) => ({
  background: "white",
  color: "var(--mainColor)",
  cursor: "pointer",
  borderRadius: "calc(var(--border-radius)*1) !important",
  boxShadow: "1px 3px 10px 0px #0000006b",
  width: "90%",
  position: "relative",
  border: "1px solid var(--mainColor)",
  overflow: "hidden",
  transition: "all 0.3s ease",

  "& h3": {
    fontSize: "var(--font-size-h3)",
    fontFamily: "var(--text-font)",
  },

  "& h4": {
    fontSize: "var(--font-size-h3)",
    textAlign: "left",
  },

  "&:hover": {
    opacity: 0.9,
  },

  "&.Mui-expanded": {
    background: "var(--mainColor)",
    color: "white",
    [theme.breakpoints.up(768)]: {
      margin: "auto !important",
      width: "90vw !important",
      order: 1,
    },
  },

  [theme.breakpoints.up(768)]: {
    flex: "1 ",
    width: "90vw",
    margin: "0 auto",
  },

  [theme.breakpoints.up(1024)]: {
    width: "auto",
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)`
  padding: var(--spacing-ref);
  font-family: var(--text-font);
  font-size: calc(var(--font-size-h3) / 3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-ref) 0 var(--spacing-ref) !important;
  margin: 0 !important;
`;

export const StyledSummaryContent = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  color: var(--mainColor);

  .Mui-expanded & {
    color: white;
  }
`;

export const StyledExpandIcon = styled(ExpandMoreIcon)`
  color: var(--mainColor);
  font-size: 2rem;

  .Mui-expanded & {
    color: white;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  padding: var(--spacing-ref);
  background: white;
  color: var(--mainColor);
  font-family: calc(var(--font-size-h2) / 2.5);
  font-weight: bold;
  text-align: center;
`;

export const StyledDropdownButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "var(--spacing-ref) 0",

  [theme.breakpoints.up(768)]: {
    margin: "var(--spacing-ref)",
    maxWidth: "400px",
    alignSelf: "flex-start",
  },

  "&:has(.Mui-expanded)": {
    [theme.breakpoints.up(1024)]: {
      width: "90%",
      maxWidth: "100%",
      order: 1,
    },
  },
}));

export const DropdownButtonGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "0 calc(var(--spacing-ref) * 2)",

  [theme.breakpoints.up(768)]: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "var(--spacing-ref) * 2",
    padding: "0 calc(var(--spacing-ref) * 2)",
  },
}));
