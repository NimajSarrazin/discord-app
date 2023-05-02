/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

export default function CardSaftyBtn({title, content, contentBtn}) {
  return (
    <div className="min-w-[104%] w-full pb-2 hover:bg-opacity-10">
      <h1 className="text-[32px] text-white font-bold mb-4">{title}</h1>
      <p className=" text-white text-left mb-4 font-light text-base leading-6 no-underline">
        {content}
      </p>
      <div className="flex flex-start">
        <p className="font-bold text-white space-x-4">{contentBtn}</p>
        <img src="assetsaftypage/ArrowButton.svg" alt="fleche icon" />
      </div>
    </div>
  );
}
