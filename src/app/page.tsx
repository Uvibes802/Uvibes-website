"use client";

import FloatingMenu from "@/components/menu/Menu";
import UserNumberCard from "@/components/cards/userNumberCard";
import InspirationSection from "@/components/section/inspirationSection";
import { useEffect, useState } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <FloatingMenu />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
    </div>
  );
}
