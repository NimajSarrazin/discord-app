import React from "react";
import Navigation from "../components/navbar/Navigation";
import CardDownloadPage from "../components/cards/CardDownloadPage";

export default function DowloadPage() {
  return (
    <section className="bg-[#23272a] ">
      <Navigation color="bg-[#23272a]" />
      <div className="text-white">
        <CardDownloadPage />
      </div>
    </section>
  );
}
