import React from "react";

export default function BtnSecondary() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:tiems-start sm:items-center gap-6">
      <button className="flex text-white p-4 rounded-full bg-gray-700 w-96 font-medium items-center justify-center text-lg hover:shadow-2xl hover:text-purple-400 focus:outline-none transition duration-200 ease-in-out">
        Ouvrir Discord dans ton navigateur
      </button>
    </div>
  );
}
