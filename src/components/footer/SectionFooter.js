import React from "react";
import { DataFooter } from "../../data/DataFooter";
import BtnSecondary from "../btn/BtnSecondary";
import { Link } from "react-router-dom";

export default function SectionFooter() {
  return (
    <div className="bg-[#23272a] flex flex-col py-16 sm:px-20 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <aside className="flex flex-col items-start md:w-1/4">
          <h4 className="text-[#5865f2] text-4xl font-extrabold uppercase leading-none mb-6">
            Imagine un <br />
            endroit
          </h4>
          <span className="flex font-light items-center space-x-1">
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
          <div className="mt-4 flex flex-row items-start justify-start md:justify-between">
            {/* twitter svg */}
            <img className="mr-4 w-6 h-6" src="img/svgexport-9.svg" alt="" />
            {/* instagram svg */}
            <img className="mr-4 w-6 h-6" src="img/svgexport-10.svg" alt="" />
            {/* facebook svg */}
            <img className="mr-4 w-6 h-6" src="img/svgexport-11.svg" alt="" />
            {/* youtube svg */}
            <img className="mr-4 w-6 h-6" src="img/svgexport-12.svg" alt="" />
            {/* tick-tock svg */}
            <img className="mr-4 w-6 h-6" src="img/svgexport-13.svg" alt="" />
          </div>
        </aside>
        <div className="flex flex-wrap justify-start md:justify-between sm:gap-7">
          {DataFooter.map((item) => (
            // Utilisation de la méthode map() pour afficher les éléments venant de la card dataFooter qui contient des objets avec des propriété title et une propriété liens.
            <div
              className="flex flex-col mr-8 mt-10 md:mt-0 md:w-auto"
              key={item.title}
            >
              <p className="text-[#5865f2] text-lg mb-2">{item.title}</p>
              <ul>
                {item.liens.map((link) => (
                  <li className="mt-2" key={link}>
                    <Link to="/">
                      <p className="text-white text-md">{link}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center md:justify-between items-center pt-8 mt-8 border-t-2 border-blue-500 flex-wrap">
        <span className="mr-4 mb-4 md:mb-0">
          <img src="img/svgexport-1.svg" alt="discordsvg" />
        </span>
        <BtnSecondary
          color="bg-blue-800"
          content="Ouvrir Discord"
          textColor="white"
        />
      </div>
    </div>
  );
}
