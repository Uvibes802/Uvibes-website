import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFloatButton = styled(Fab)(
	`
        position: fixed;
    bottom: 0;
    right: 0;
    margin: 16px;
        z-index: 1000;
        dropshadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
        z-index: 1000;
     
    `,
);
