/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import CardSaftyBtn from "./cardsafty/CardSaftyBtn";

export default function CardSafety() {
  return (
    <div className="bg-[#5865f2] flex flex-col py-20">
      <div className="w-[90%] max-w-[1180px] m-auto static">
        <h2 className="text-3xl lg:text-5xl  lg:mb-1md:m-2 max-w-[595px] text-white mt-[40px] mb-[32px] font-black  uppercase">
          Centre de <br /> sécurité de <br /> discord
        </h2>
        <div className="lg:flex gap-x-24">
          <aside className="grid grid-cols-6 grid-row-1">
            <div className="col-start-1 col-end-7 row-start-1 row-end-2">
              <CardSaftyBtn
                title="Discord, c'est quoi ?"
                content="Discord est une application de communication par chat vidéo, vocal et textuel utilisée par des dizaines de millions de personnes âgées de 13 ans ou plus pour se retrouver et discuter avec leurs communautés et leurs amis."
                contentBtn="En savoir plus"
              />
              <CardSaftyBtn
                title="L'engagement de Discord pour une expérience sûre et de confiance"
                content="Nous mettons tout en œuvre pour que tout le monde, sur Discord, puisse avoir de profondes conversations et passer du temps avec ses communautés dans un environnement sûr, positif et inclusif."
                contentBtn="En savoir plus"
              />
            </div>
          </aside>
          <div className="">
            <div className="">
              <img
                className="hidden lg:block max-w-[500px] justify-end text-right"
                src="assetsaftypage/shieldDiscord.svg"
                alt="discord shield"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
