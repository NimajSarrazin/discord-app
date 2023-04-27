//  tracking-tight : l'espace entre les lettres
import React from "react";
import BtnPrimary from "../btn/BtnPrimary";
import { Fade } from "react-reveal";

export default function CardSectionChilling() {
  return (
    <Fade>
      <div className="bg-[#f6f6f6] flex justify-center items-center px-4 py-1">
        <div className="flex flex-1 flex-col justify-center items-center sm:my-18 my-14 p-2 sm:p-4">
          <div className="flex flex-col justify-center items-center p-1 sm:p-6">
            <h2 className="text-left md:text-5xl text-3xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-6">
              UNE TECHNOLOGIE FIABLE POUR GARDER LE LIEN
            </h2>
            <p className="w-full md:w-9/12 px-2 sm:px-4 mt-8 md:text-center text-left ">
              Grâce aux chats vocaux et vidéo à faible latence, les
              interlocuteurs ont l'impression d'être dans la même pièce. Fais un
              petit coucou par vidéo, regarde tes amis streamer leurs jeux, ou
              profitez du partage d'écran pour faire une session de dessin
              ensemble.
            </p>
          </div>
          <img className="w-10/12" src="img/image1.svg" alt="" />
          <img
            className="w-50 sm:w-85 mt-10 mx-4"
            src="img/svgexport-7.svg"
            alt=""
          />
          <h2 className="text-center text-5xl font-bold tracking-tight leading-13">
            On se lance dans l'aventure ?
          </h2>
          <div className="mt-10">
            <BtnPrimary color="blue-600" textColor="white" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
