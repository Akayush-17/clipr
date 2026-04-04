"use client";

import { useState } from "react";
import { BG, CREAM } from "../constants/theme";
import NavBar from "./NavBar";
import Hero from "./Hero";
import ForWhomSection from "./ForWhomSection";
import DashboardSection from "./DashboardSection";
import ClipperPOVSection from "./ClipperPOVSection";
import VsUGCSection from "./VsUGCSection";
import HowItWorksSection from "./HowItWorksSection";
import TerminalSection from "./TerminalSection";
import WaitlistSection from "./WaitlistSection";
import MidCTA from "./MidCTA";
import Footer from "./Footer";

export default function Landing() {
  const [role, setRole] = useState<"creator" | "clipper">("creator");
  const isCreator = role === "creator";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: CREAM,
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      <NavBar />
      <main>
        <Hero role={role} onRoleChange={setRole} />
        <ForWhomSection isCreator={isCreator} />
        <MidCTA isCreator={isCreator} />
        {isCreator ? <DashboardSection /> : <ClipperPOVSection />}
        <VsUGCSection isCreator={isCreator} />
        <HowItWorksSection />
        {isCreator && <TerminalSection />}
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
