"use client";

import FloatingMenu from "@/components/menu/Menu";
import UserNumberCard from "@/components/cards/userNumberCard";
import InspirationSection from "@/components/section/inspirationSection";
import Resize from "@/services/resize/resize";
export default function Home() {
  const { isMobile } = Resize();
  return (
    <main>
      <FloatingMenu />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
    </main>
  );
}
