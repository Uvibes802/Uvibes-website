"use client";

import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(
  `
  background: var(--gradientColor-button);
  color: #F4ECEC;
  border-radius: calc(var(--border-radius) * 3);
  padding: var(--spacing-ref);
  border: none;
  width: 15rem;
  cursor: pointer;
  height: 3rem;
  font-family: var(--title-font);
  font-size: calc(var(--font-size-ref) * 1);
  letter-spacing: var(--spacing-letter);
  box-shadow: 0px 2px 2px 0px #0000006b;

  &:hover {
  opacity: 0.9;
  };
  `
);
