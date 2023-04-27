import React from "react";
import CardSectionAll from "./CardSectionAll";

export default function CardDownloadPage() {
  return (
    <section>
      <div className="pb-4">
        <CardSectionAll
          img="svg1.svg"
          title="TÉLÉCHARGER DISCORD POUR N'IMPORTE QUEL APPAREIL"
          content="L'aventure t'attend ! Retrouve tes amis via notre application de bureau et continue ta conversation sur ton portable."
          direction="md:flex-row-reverse"
        />
      </div>
    </section>
  );
}
