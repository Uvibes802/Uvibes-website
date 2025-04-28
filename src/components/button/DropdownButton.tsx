import {
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDropdownButton,
  StyledDropdownButtonContainer,
  StyledExpandIcon,
  StyledSummaryContent,
} from "@/styles/button/StyledDropdownButton";
import type { DropdownButtonProps } from "@/types/button/dropdownButton";

export function DropdownButton({
  icon,
  title,
  subtitle,
  children,
}: DropdownButtonProps) {
  return (
    <StyledDropdownButtonContainer>
      <StyledDropdownButton>
        <StyledAccordionSummary expandIcon={<StyledExpandIcon />}>
          <StyledSummaryContent>
            {icon}
            <h3>{title}</h3>
          </StyledSummaryContent>
        </StyledAccordionSummary>

        <StyledAccordionDetails>
          <h4>{subtitle}</h4>
          {children}
        </StyledAccordionDetails>
      </StyledDropdownButton>
    </StyledDropdownButtonContainer>
  );
}
