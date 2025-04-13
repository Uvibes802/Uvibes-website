import AvatarGroup from "@mui/material/AvatarGroup";
import { styled as muiStyled } from "@mui/material/styles";

const avatarSize = {
	default: "60px",
	desktop: "90px",
};

export const StyledPartnerGroup = muiStyled(AvatarGroup)(({ theme }) => ({
	"& .MuiAvatar-root": {
		position: "relative",
		padding: "2px",
		backgroundImage: "var(--gradientColor)",
		backgroundOrigin: "border-box",
		border: "none",
		width: avatarSize.default,
		height: avatarSize.default,
	},

	"& .MuiAvatar-root img": {
		borderRadius: "50%",
		backgroundColor: "white",
		maxWidth: "100%",
		maxHeight: "100%",
		objectFit: "contain",
		objectPosition: "center",
		display: "block",
	},

	[theme.breakpoints.up(768)]: {
		"& .MuiAvatar-root": {
			width: avatarSize.desktop,
			height: avatarSize.desktop,
		},
	},
}));
