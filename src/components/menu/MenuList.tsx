import { Items } from "../../features/menu/MenuData";
import MenuItem from "./MenuItem";
import { PopupButton } from "react-calendly";

type MenuListProps = {
  className: string;
};

export default function MenuList({ className }: MenuListProps) {
  return (
    <>
      {Items.map((item) =>
        item.id === 6 ? (
          <PopupButton
            key={item.id}
            url="https://calendly.com/justine-cousin-wbx/demo-uvibes"
            rootElement={document.body}
            text="Prendre RDV"
            className={"calendly-button-menu"}
          />
        ) : (
          <MenuItem key={item.id} {...item} className={className} />
        )
      )}
    </>
  );
}
