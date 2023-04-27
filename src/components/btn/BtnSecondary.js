import React from "react";
import { Link } from "react-router-dom";

export default function BtnSecondary({ color, content, textColor }) {
  const colorStyle = `${color}`;
  return (
    <div className="flex flex-wrap justify-center ">
      <Link to="//discord.com/register">
        <button
          className={`flex-1 lg:flex-auto 2xl:flex-initial flex justify-center items-center ${colorStyle} text-${textColor} py-3 px-6 rounded-full text-base mr-4hover:shadow-2xl hover:text-gray-400 focus:outline-none transition duration-200 ease-in-out`}
        >
          {content}
        </button>
      </Link>
    </div>
  );
}
