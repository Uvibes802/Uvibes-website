import { styled } from "@mui/material";
import Link from "next/link";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;
