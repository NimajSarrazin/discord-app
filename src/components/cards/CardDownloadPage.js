import React from "react";
import CardSectionAll from "./CardSectionAll";
import BtnPrimary from "../btn/BtnPrimary";
import CardDownload from "./carddownload/CardDownload";

export default function CardDownloadPage() {
  return (
    <section className="">
      <div className="pb-4">
        <CardSectionAll
          img="svg1.svg"
          title="TÉLÉCHARGER DISCORD POUR N'IMPORTE QUEL APPAREIL"
          content="L'aventure t'attend ! Retrouve tes amis via notre application de bureau et continue ta conversation sur ton portable."
          direction="md:flex-row-reverse"
        />
        <div className="flex flex-col  items-center justify-center   md:ml-24 md:flex-col md:space-x-3  md:justify-start xl:flex-row xl:ml-96  lg:justify-start relative -top-20 lg:ml-80">
          <BtnPrimary color="bg-blue-700" />
          <div className="">
            <p className="text-sm"> Windows 7 ou version supérieure</p>
          </div>
        </div>
      </div>
      <section className="bg-white">
        <div className="">
          <CardDownload title='IOS' url_img='svg2.svg'/>
        </div>
      </section>
    </section>
  );
}
