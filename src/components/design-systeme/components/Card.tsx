import * as React from 'react';

interface CardProps {
  label: string;
  datesSondage: string;
  detail?: string;
  icon?: string;
}

const Card = ({ label, datesSondage, icon, detail }: CardProps) => (
  <div className="fr-card" style={{ marginRight: '1rem' }}>
    <div
      className="fr-card__img"
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <img
        className="fr-responsive-img"
        src={icon}
        alt={`Icône décrivant la profession de ${label}`}
      />
    </div>
    <div className="fr-card__body">
      {detail && <p className="fr-card__detail">{detail}</p>}
      <h4 className="fr-card__title">{label}</h4>
      <p className="fr-card__desc">
        Description texte body small regular consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore…
      </p>
      <h5>
        <span className="fr-fi-calendar-line"></span> {datesSondage}
      </h5>
    </div>
  </div>
);

export default Card;
