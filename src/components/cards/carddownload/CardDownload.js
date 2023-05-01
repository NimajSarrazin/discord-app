import React from "react";
import CardGrid from "./CardGrid";
import { DataDownload } from "../../../data/DataDownload";

export default function CardDownload() {
  return (
    <div class="py-20 gap-x-10 text-black flex flex-col lg:px-20 lg:gap-x-10 lg:gap-y-10 md:grid grid-cols-2 grid-rows-[150px] 2xl:grid-row-[300px] ">
      {DataDownload.map((data) => (
        <div class={data.containerClass}>
          <CardGrid
            url_img={data.url_img}
            title={data.title}
            content={data.content}
          />
        </div>
      ))}
    </div>
  );
}
