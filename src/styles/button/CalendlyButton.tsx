"use client";

import { styled } from "@mui/material";
import { PopupButton } from "react-calendly";

export const CalendlyStyledButton = styled(PopupButton)(`
   background: var(--gradientColor-button);
  color: #F4ECEC;
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  border: none;
  min-width: 10rem;
  cursor: pointer;
  height: auto;
  font-family: var(--title-font);
  font-size: calc(var(--font-size-ref) * 1);
  letter-spacing: var(--spacing-letter);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }
`);
