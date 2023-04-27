import React from "react";
import CardSectionAll from "./cards/CardSectionAll";

export default function SectionStudyGroup() {
  return (
    <div className="flex flex-col">
      <CardSectionAll
        direction='md:flex-row'
        img="image4.svg"
        title="Créer un espace accessible uniquement sur invitation où tu te sens biens"
        content="Les serverveur Discord sont orgarnisés en salons axés sur des sujets où vous pouvez collaborer, partager et simplement discuter de votre journées sans encombrer un groupe de discussion"
      />
    </div>
  );
}
