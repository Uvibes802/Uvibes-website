"use client";

import { Items } from "../../features/menu/MenuData";
import MenuItem from "./MenuItem";
import { PopupButton } from "react-calendly";
import "../../styles/menu/Menu.css";
import { useEffect, useState } from "react";

type MenuListProps = {
  className: string;
};

export default function MenuList({ className }: MenuListProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {Items.map((item) =>
        item.id === 6 && isClient ? (
          <PopupButton
            key={item.id}
            url="https://calendly.com/uvibescommunication/30min"
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
