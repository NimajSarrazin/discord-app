// installation de yarn add react-reveal pour effet annimation fade
import React from "react";
import { Fade } from "react-reveal";

export default function CardSectionAll({ img, title, content, direction }) {
  return (
    <Fade>
      <div className="flex my-14 md:flex-row justify-center items-center sm:my-28 px-4">
        <div
          className={`flex flex-col ${direction} justify-center items-center`}
        >
          <img
            className="w-auto h-auto"
            src={`img/${img}`}
            alt={title}
          />
          <div className="w-11/12 md:w-5/12 lg:w-4/12  xl:w-3/12 2xl:w-3/12 md:ml-20 ">
            <p className="overflow-hidden text-left md:text-5xl text-xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-8">
              {title}
            </p>
            <p className="mt-4 text-left md:text-lg text-base">{content}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
