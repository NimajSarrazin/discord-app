import React from "react";
import BtnSecondary from "../../btn/BtnSecondary";
import { Fade } from "react-reveal";
export default function CardGrid({ url_img, title, content }) {
  return (
    <div>
      <Fade bottom>
        <div className="bg-[#F6F6F6] text-black rounded-lg shadow-md p-20 overflow-hidden text-center h-[600px] sm:max-w-sm sm:m-auto md:max-w-full lg:max-w-full xl:max-w-xl 2xl:max-w-3xl">
          <p className="text-3xl md:text-xl font-semibold mb-5">{title}</p>
          <span className="flex pb-10 text-white">
            <BtnSecondary color="bg-gray-900" content="Télécharger" />
          </span>
          <img
            src={`img/${url_img}`}
            alt=""
            className="mx-auto w-auto h-auto mt-[64px] object-fit overflow-clip content-box"
          />
          <p>{content}</p>
        </div>
      </Fade>
    </div>
  );
}
