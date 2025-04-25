import { StyledButton } from "@/styles/button/styledButton";
import type { ButtonProps } from "@/types/button/button";

export default function Button({ title, type, href }: ButtonProps) {
  const button = <StyledButton type={type}>{title}</StyledButton>;

  return href ? <a href={href}>{button}</a> : button;
}
