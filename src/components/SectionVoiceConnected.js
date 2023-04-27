import React from "react";
import CardSectionAll from "./cards/CardSectionAll";

export default function SectionVoiceConnected() {
  return (
    <div className="flex flex-col bg-[#f6f6f6]">
      <CardSectionAll
        direction="flex-row-reverse"
        title="Là où il est facile de passer du temps ensembleé"
        content="Prends place dans un salon vocal quand tu es libre. Les amis dans ton serveur peuvent voir que tu es là et immédiatement te rejoindre sans avoir besoin d'appeler."
        img="image2.svg"
      />
    </div>
  );
}
