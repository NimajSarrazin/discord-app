import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DataNavigation } from "../../data/DataNavigation";

export default function Navigation() {
  let route = useLocation().pathname;
  let activeStyle = "";
  return (
    <header className=" bg-[#404eed]  py-4 px-6 text-white ">
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
              <li
                className={route === item.URL ? activeStyle : "hover:underline"}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-white p-3 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-purple-400 transition duration-200 ease-in-out whitespace-nowrap text-black">
            Open Discrod
          </button>
          <div className="h-9 text-white cursor-pointer lg:hidden">
            <img src="img/svgexport-2.svg" alt="" />
          </div>
        </div>
      </ul>
    </header>
  );
}
