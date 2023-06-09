import React from "react";
import { Link } from "react-router-dom";

export default function BtnPrimary({ color, textColor }) {
  const colorStyle = `${color}`;
  return (
    <div className="flex flex-wrap justify-center">
      <Link to="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86">
        <button
          className={`flex-1 lg:flex-auto 2xl:flex-initial flex justify-center items-center ${colorStyle} text-${textColor} py-3 px-6 rounded-full text-base mr-4hover:shadow-2xl hover:text-blue-400 focus:outline-none transition duration-200 ease-in-out`}
        >
          <span className="inline-block">
            <svg className="fill-current h-5" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
          </span>
          Télécharger pour windows
        </button>
      </Link>
    </div>
  );
}
