import { StyledPartnerGroup } from "@/styles/banner/StyledPartnerGroup";
import Avatar from "@mui/material/Avatar";
import eklore from "../../../public/images/eklore.png";
import mutelios from "../../../public/images/mutelios.png";
import universitéDePerpignan from "../../../public/images/upvd_logo_hori_rvb.png";

export default function PartnerGroup() {
  return (
    <StyledPartnerGroup max={3}>
      <Avatar alt="Université de Perpignan" src={universitéDePerpignan.src} />
      <Avatar alt="Eklore" src={eklore.src} />
      <Avatar alt="Mutélios" src={mutelios.src} />
    </StyledPartnerGroup>
  );
}
