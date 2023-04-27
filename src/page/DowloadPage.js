import React from 'react'
import Navigation from '../components/navbar/Navigation'
import CardDownloadPage from '../components/cards/CardDownloadPage';

export default function DowloadPage() {
  return (
    <section className="bg-[#23272a] text-white">
      <Navigation color="bg-[#23272a]" />
      <CardDownloadPage />
    </section>
  );
}
