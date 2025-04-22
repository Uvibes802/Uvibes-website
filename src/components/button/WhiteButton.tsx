import { StyledWhiteButton } from "../../styles/button/styledWhiteButton";
import type { ButtonProps } from "@/types/button/button";

export default function WhiteButton({ title, type }: ButtonProps) {
  return (
    <>
      <StyledWhiteButton type={type}>{title}</StyledWhiteButton>
    </>
  );
}
