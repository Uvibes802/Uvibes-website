"use client";

import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(
  `
  background: var(--gradientColor);
  color: white;
  border-radius: calc(var(--border-radius) * 3);
  padding: var(--spacing-ref);
  border: none;
  width: 15rem;
  height: 3rem;
  font-family: var(--title-font);
  font-size: calc(var(--font-size-ref) * 1);
  letter-spacing: var(--spacing-letter);
  box-shadow: 1px 3px 10px 0px #0000006b;

  &:hover {
  opacity: 0.9;
  };
  `
);
