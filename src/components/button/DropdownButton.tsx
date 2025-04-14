import {
	StyledAccordionDetails,
	StyledAccordionSummary,
	StyledDropdownButton,
	StyledDropdownButtonContainer,
	StyledExpandIcon,
	StyledSummaryContent,
} from "@/styles/button/StyledDropdownButton";
import type { DropdownButtonProps } from "@/types/button/dropdownButton";
import React from "react";

export function DropdownButton({ icon, title, subtitle }: DropdownButtonProps) {
	return (
		<StyledDropdownButtonContainer>
			<StyledDropdownButton>
				<StyledAccordionSummary expandIcon={<StyledExpandIcon />}>
					<StyledSummaryContent>
						{icon} {/* definir une taille pour l'icône à 3rem */}
						<span>{title}</span>
					</StyledSummaryContent>
				</StyledAccordionSummary>

				<StyledAccordionDetails>{subtitle}</StyledAccordionDetails>
			</StyledDropdownButton>
		</StyledDropdownButtonContainer>
	);
}
