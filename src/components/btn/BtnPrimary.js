import React from "react";

export default function BtnPrimary() {
  return (
    <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row md:tiems-start sm:items-center gap-6">
      <button className="flex p-4 rounded-full bg-white w-96 font-medium items-center justify-center text-lg hover:shadow-2xl hover:text-purple-400 focus:outline-none transition duration-200 ease-in-out">
        <img src="img/svgexport-3.svg" alt=""/>
        Télécharger pour windows
      </button>
    </div>
  );
}
