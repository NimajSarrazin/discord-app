import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataNavigation } from "../../data/DataNavigation";
import { Fade } from "react-reveal";

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
    <header className={`${colorStyle}  py-4 px-6 text-white `}>
      {/* condidtion de showModal est vrai elle affichera la liste de la navigation */}
      {showModal && (
        <Fade right>
          <div className="z-10  sm:block bg-gray-400 text-black bg-opacity-50  border-r-white border-b-black shadow-lg shadow-slate-950 absolute right-9 list-none w-32 text-center p-2 mt-12 hover:bg-blue-300   md:block lg:hidden">
            {DataNavigation.map((item) => (
              <Link to={item.URL} key={item.text}>
                {/* si la route est strictement égale(vrai) elle appliquera le activeStyle si non underline sera appliqué */}
                <li
                  className={
                    route === item.URL ? activeStyle : "hover:underline"
                  }
                >
                  {item.text}
                </li>
              </Link>
            ))}
            <button onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        </Fade>
      )}
      <ul className="flex justify-around">
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
          <button className="bg-white p-3 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-blue-300 transition duration-200 ease-in-out whitespace-nowrap text-black">
            Open Discrod
          </button>
          <div className="h-9 text-white cursor-pointer lg:hidden">
            <img onClick={handleClick} src="img/svgexport-2.svg" alt="" />
          </div>
        </div>
      </ul>
    </header>
  );
}
