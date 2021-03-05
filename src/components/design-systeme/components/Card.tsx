import * as React from 'react';
import { Link } from 'gatsby';

interface CardProps {
  label: string;
  datesSondage: string;
  picture?: string;
  detail?: string;
}

const Card = ({ label, datesSondage, picture, detail }: CardProps) => (
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
        src={picture}
        alt={`Icône décrivant la profession de ${label}`}
        style={{ width: `50%`, height: `50%`, position: `relative` }}
      />
    </div>
    <div className="rf-card__body">
      {detail && <p className="rf-card__detail">{detail}</p>}
      <h4 className="rf-card__title">
        <Link to="#" className="rf-card__link">
          {label}
        </Link>
      </h4>
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
