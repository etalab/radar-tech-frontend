import * as React from 'react';

interface CardProps {
  label: string;
  datesSondage: string;
  detail?: string;
  icon?: string;
}

const Card = ({ label, datesSondage, icon, detail }: CardProps) => (
  <div className="rf-card" style={{ marginRight: '1rem' }}>
    <div
      className="rf-card__img"
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <img
        src={icon}
        alt={`Icône décrivant la profession de ${label}`}
        style={{ position: `relative` }}
      />
    </div>
    <div className="rf-card__body">
      {detail && <p className="rf-card__detail">{detail}</p>}
      <h4 className="rf-card__title">{label}</h4>
      <p className="rf-card__desc">
        Description texte body small regular consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore…
      </p>
      <h5>
        <span className="rf-fi-calendar-line"></span> {datesSondage}
      </h5>
    </div>
  </div>
);

export default Card;
