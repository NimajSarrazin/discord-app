import React from "react";
import SectionHero from "../components/hero/SectionHero";
import SectionStudyGroup from "../components/SectionStudyGroup";
import SectionVoiceConnected from "../components/SectionVoiceConnected";
import SectionCommu from "../components/SectionCommu";
import SectionChilling from "../components/SectionChilling";
import SectionFooter from "../components/footer/SectionFooter";

export default function HomePage() {
  return (
    <div>
      <SectionHero />
      <SectionStudyGroup />
      <SectionVoiceConnected/>
      <SectionCommu/>
      <SectionChilling />
      <SectionFooter />
    </div>
  );
}
