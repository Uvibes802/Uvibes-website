"use client";

import TeamCards from "@/components/cards/teamCards";
import FloatingMenu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <TeamCards
        image="/images/testcard.jpg"
        name="Delphine Boyer"
        role="Présidente"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <FloatingMenu />
    </div>
  );
}
