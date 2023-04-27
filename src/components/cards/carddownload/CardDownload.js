import React from "react";
import CardGrid from "./CardGrid";

export default function CardDownload() {
  return (
    <div class="py-12 px-12 text-black grid grid-cols-2 grid-rows-[100px, auto]  col-span-8">
      <div class=" col-start-1 col-end-2 row-start-1 row-end-2">
        <CardGrid url_img="svg2.svg" title="IOS" />
      </div>
      <div class="col-start-2 col-end-3 row-start-2 row-end-3">
        <CardGrid url_img="svg3.svg" title="Android" />
      </div>
      <div class="col-start-1 col-end-2 row-start-3 row-end-4">
        <CardGrid url_img="svg5.svg" title="Linux" />
      </div>
      <div class="col-start-2 col-end-3 row-start-4 row-end-5">
        <CardGrid url_img="svg6.svg" title="Mac" />
      </div>
    </div>
  );
}
