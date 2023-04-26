import React from "react";

export default function CardSectionImgHero() {
  return (
    <section>
      <div className="flex-grow md:relative">
        <div className="">
          <img
            src="img/svgexport-5.svg"
            alt=""
            className="absolute -top-64 left-[-10%] sm:hidden md:hidden lg:hidden xl:block"
          />
        </div>
        <div className="">
          <img
            src="img/svgexport-6.svg"
            alt=""
            className="absolute -top-64 right-[-8%] sm:hidden md:hidden lg:hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
}
