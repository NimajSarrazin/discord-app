import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navbar/Navigation";

export default function ErrorPage() {
  return (
    <section>
      <Navigation color="bg-[#23272a]" />

      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#3d5aff] px-2 text-sm rounded rotate-45 absolute">
          Page Not Found
        </div>
        <div className="bg-blue-800">
          <img className='w-72' src="img/svgexport-1.svg" alt="discrod logo" />
        </div>
        <button className="mt-5">
          <Link
            to="/"
            className="relative inline-block text-sm font-medium text-[#3d5aff] group active:text-blue-500 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#3d5aff] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Retourner à l'acceuil
            </span>
          </Link>
        </button>
      </div>
    </section>
  );
}
