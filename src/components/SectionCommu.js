import React from 'react'
import CardSectionAll from './cards/CardSectionAll'

export default function SectionCommu() {
  return (
    <div className="flex flex-col">
      <CardSectionAll
        direction="md:flex-row"
        img="image3.svg"
        title="De quelques personnes à toute une communauté"
        content="Gère n'importe quelle communauté, grâce à des outils de modération et des permissions personnalisées pour les membres. Accorde des pouvoirs spéciaux aux membres, crée des salons privés, et plus encore."
      />
    </div>
  );
}
