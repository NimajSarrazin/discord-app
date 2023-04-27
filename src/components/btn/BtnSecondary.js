import React from "react";
import { Link } from "react-router-dom";

export default function BtnSecondary({ color, content }) {
  return (
    <div>
      <Link to="//discord.com/register">
        <button
          className={` bg-${color} w-32 sm:w-6/12  md:w-5/12 lg:w-4/12 lx:w-2/12 2xl:w-96 text-white py-3 px-6 rounded-full text-base mt-4 md:mt-0 text-centerflex p-4 font-medium items-center justify-center hover:shadow-2xl hover:text-gray-400 focus:outline-none transition duration-200 ease-in-out`}
        >
          {content}
        </button>
      </Link>
    </div>
  );
}
