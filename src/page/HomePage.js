import React from "react";
import SectionHero from "../components/hero/SectionHero";
import SectionStudyGroup from "../components/SectionStudyGroup";
import SectionVoiceConnected from "../components/SectionVoiceConnected";
import SectionCommu from "../components/SectionCommu";
import SectionChilling from "../components/SectionChilling";
import Navigation from "../components/navbar/Navigation";


export default function HomePage() {
  return (
    <div>
      <Navigation color="bg-[#404eed]" />
      <SectionHero />
      <SectionStudyGroup />
      <SectionVoiceConnected />
      <SectionCommu />
      <SectionChilling />
    </div>
  );
}
