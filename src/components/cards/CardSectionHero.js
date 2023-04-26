import React from "react";
import BtnPrimary from "../btn/BtnPrimary";
import CardSectionImgHero from "./CardSectionImgHero";
import BtnSecondary from "../btn/BtnSecondary";

export default function CardSectionHero({ title, content }) {
  return (
    <section className="bg-[#404eed] py-28">
      <div className="bg-[url('/public/img/svgexport-4.svg')] bg-no-repeat bg-center">
        <div className="flex flex-col gap-7 sm:max-w-lg md:max-w-md lg:max-w-2xl mx-auto">
          <div className="text-center text-white">
            <h1 className="uppercase text-[56px] font-black header-family">
              {title}
            </h1>
            <p className="text-lg font-light tracking-wide lg:max-w-4xl  w-full">
              {content}
            </p>
          </div>
        </div>
        <div className="flex space-x-3 justify-center pt-10 flex-col sm:flex-col md:flex-col lg:flex-row md:tiems-start sm:items-center gap-6">
          <BtnPrimary />
          <BtnSecondary />
        </div>
        <div className="">
          <CardSectionImgHero />
        </div>
      </div>
    </section>
  );
}
