import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataNavigation } from "../../data/DataNavigation";
import { Fade } from "react-reveal";
import BtnPrimary from "../btn/BtnPrimary";

export default function Navigation({ color }) {
  const colorStyle = `${color}`;
  // le hook useState permet de crée et afficher ou cacher la data-navigation
  const [showModal, setShowModal] = useState(false);

  // permer de récupérer l'emplacement de l'utilisateur
  let route = useLocation().pathname;
  let activeStyle = "";
  // handleClick est ajoutée à l'img pour déclancher l'affichage de la navigation
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <header className={`${colorStyle} py-4 px-6 text-white `}>
      {/* condidtion de showModal est vrai elle affichera la liste de la navigation */}
      {showModal && (
        <Fade right>
          <div className="flex flex-col transition transform ease-linear rounded-tl-lg rounded-bl-lg z-30 duration-500 w-3/4  absolute bg-white top-0 right-0 h-screen l justify-between text-black list-none lg:hidden">
            <div className="flex flex-row justify-between p-4">
              <Link to="/" onClick={() => setShowModal(false)}>
                <img
                  src="img/svgexport-1.svg"
                  alt="discord logo"
                  className="bg-gray-700 p-2 w-auto h-auto object-contain"
                />
              </Link>
              <svg
                onClick={() => setShowModal(false)}
                className="h-8 w-8 cursor-pointer"
                viewBox="0 0 12 12"
              >
                <g fill="none" fill-rule="evenodd" aria-hidden="true">
                  <path d="M0 0h12v12H0"></path>
                  <path
                    fill="currentColor"
                    d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
                  ></path>
                </g>
              </svg>
            </div>
            <ul className="list-none text-2xl pl-2 flex-1 my-5 mx-4 border-t-2 space-y-7">
              {DataNavigation.map((item) => (
                <Link to={item.URL} key={item.text}>
                  {/* si la route est strictement égale(vrai) elle appliquera le activeStyle si non underline sera appliqué */}
                  <li
                    className={
                      route === item.URL
                        ? activeStyle
                        : "hover:underline hover:text-blue-300"
                    }
                  >
                    {item.text}
                  </li>
                </Link>
              ))}
            </ul>
            <BtnPrimary
              color="bg-blue-500"
              content="Télécharger"
              textColor="white"
            />
          </div>
        </Fade>
      )}
      <ul className="flex justify-between xl:justify-evenly  lg:justify-evenly">
        <Link to="/">
          <li>
            <img
              src="img/svgexport-1.svg"
              alt="discord logo"
              className="w-32 h-12 object-contain"
            />
          </li>
        </Link>
        <div className="hidden lg:flex space-x-6 cursor-pointer font-semibold text-sm items-center">
          {DataNavigation.map((item) => (
            <Link to={item.URL} key={item.text}>
              {/* si la route est strictement égale(vrai) elle appliquera le activeStyle si non underline sera appliqué */}
              <li
                className={route === item.URL ? activeStyle : "hover:underline"}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to="https://discord.com/channels/@me">
            <button className="bg-white p-3 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-blue-300 transition duration-200 ease-in-out whitespace-nowrap text-black">
              Open discord
            </button>
          </Link>
          <div className="h-9 text-white cursor-pointer lg:hidden">
            <img onClick={handleClick} src="img/svgexport-2.svg" alt="" />
          </div>
        </div>
      </ul>
    </header>
  );
}
