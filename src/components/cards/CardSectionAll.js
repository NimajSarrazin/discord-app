import React from "react";

export default function CardSectionAll({ img, title, content, direction }) {
  return (
    <div className="flex md:flex-row justify-center items-center sm:my-28 my-18 px-4">
      <div
        className={`flex flex-col md:${direction} justify-center items-center`}
      >
        <img
          className="w-11/12 md:w-5/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12"
          src={`img/${img}`}
          alt=""
        />
        <div className="w-11/12 md:w-5/12 lg:w-4/12  xl:w-3/12 2xl:w-3/12 md:ml-20 ">
          <p className="text-left md:text-5xl text-xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-8">
            {title}
          </p>
          <p className="mt-4 text-left md:text-lg text-base">{content}</p>
        </div>
      </div>
    </div>
  );
}
