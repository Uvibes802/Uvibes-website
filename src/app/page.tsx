"use client";

import Contact from "@/components/contact/contact";
import FloatingMenu from "@/components/menu/Menu";
import UserNumberCard from "@/components/cards/userNumberCard";
import InspirationSection from "@/components/section/inspirationSection";
import Resize from "@/services/resize/resize";
export default function Home() {
  const { isMobile } = Resize();
  return (
    <div>
      <FloatingMenu />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
      <Contact />
    </div>
  );
}
