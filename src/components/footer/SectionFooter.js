/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

export default function SectionFooter() {
  return (
    <div className="bg-[#23272a] flex flex-col py-16 sm:px-20 px-6">
      <div className="flex flex-col md:flex-row sm:justify-between sm:justify-items-center">
        <aside className="flex flex-col items-start">
          <h4 className="text-4xl font-extrabold uppercase leading-none">
            {" "}
            Imagine un <br /> endroit
          </h4>
          <span className="flex mt-6 font-light items-center space-x-1">
            <img
              className="w-6 h-4 inline-block mr-2"
              src="img/france.png"
              alt=""
            />
            <span className="text-white">Français, FR</span>
            <select
              className="cursor-pointer text-black w-5 h-4 inline-block mr-2"
              name="language"
              id="language"
            >
              <option className="">Choose...</option>
              <option value="French">Français</option>
              <option value="English">Anglais</option>
              <option value="Russian">Russe</option>
              <option value="Deutsch">Allemagne</option>
            </select>
          </span>
          <div className="mt-4 flex flex-row items-start justify-between">
            {/* twitter svg */}
            <img className=" mr-4 w-6 h-6" src="img/svgexport-9.svg" alt="" />
            {/* instagram svg */}
            <img className=" mr-4 w-6 h-6" src="img/svgexport-10.svg" alt="" />
            {/* facebook svg */}
            <img className=" mr-4 w-6 h-6" src="img/svgexport-11.svg" alt="" />
            {/* youtube svg */}
            <img className=" mr-4 w-6 h-6" src="img/svgexport-12.svg" alt="" />
            {/* tick-tock svg */}
            <img className=" mr-4 w-6 h-6" src="img/svgexport-13.svg" alt="" />
          </div>
        </aside>
        <div className="flex flex-col md:flex-row md:flex-1 md:justify-between md:ml-20">
          <div>
            <ul>
              <li>
                <p className=" text-sm">Produit</p>
              </li>
              <li className="mt-2"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
