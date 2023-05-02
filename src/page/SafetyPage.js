import React from "react";
import Navigation from "../components/navbar/Navigation";
import CardSafety from "../components/cards/CardSafety";

export default function SafetyPage() {
  return (
    <section>
      <div>
        <Navigation color="bg-[#5865f2]" />
      </div>
      <div className="">
        <CardSafety />
      </div>
    </section>
  );
}
