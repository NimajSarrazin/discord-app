import React from "react";
import BtnSecondary from "../../btn/BtnSecondary";
import { Fade } from "react-reveal";
export default function CardGrid({ url_img, title, content }) {
  return (
    <div className="mt-5">
      <Fade>
        <div className="bg-[#F6F6F6] text-black rounded-lg shadow-md overflow-hidden max-w-sm  p-4 md:max-w-none">
          <p className="text-3xl text-center md:text-xl font-semibold mb-5">
            {title}
          </p>
          <span className="flex text-white items-center justify-center md:pb-10">
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
