import React from "react";
import BtnSecondary from "../../btn/BtnSecondary";
import { DataDownload } from "../../../data/DataDownload";

export default function CardGrid({ url_img, title }) {
  return (
    <div class="lg:w-full md:w-full sm:max-w-sm xl:max-w-xl 2xl:max-w-3xl bg-[#F6F6F6] text-black rounded-lg shadow-md text-center p-20 flex flex-col">
      <p class="text-3xl font-semibold mb-2">{title}</p>
      <span class="text-white flex-grow pb-10">
        <BtnSecondary color="bg-gray-900" content="Télécharger" />
      </span>
      <img
        src={`img/${url_img}`}
        alt=""
        class="mx-auto h-auto w-full object-fit"
      />
    </div>
  );
}
