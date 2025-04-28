import { StyledButton } from "@/styles/button/styledButton";
import type { ButtonProps } from "@/types/button/button";

export default function Button({ title, type }: ButtonProps) {
  return <StyledButton type={type}>{title}</StyledButton>;
}
