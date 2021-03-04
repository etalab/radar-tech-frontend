import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import designerPic from '../images/icon-designers.svg';

type CardProps = {
  label: string;
  datesSondage: string;
};

const Card = ({ label, datesSondage }: CardProps) => (
  <div className="rf-card" style={{ marginRight: '1rem' }}>
    <div className="rf-card__img">
      <img
        src={designerPic}
        alt={`Icône décrivant la profession de ${label}`}
      />
    </div>
    <div className="rf-card__body">
      {/* <p className="rf-card__detail">Détail</p> */}
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ marginBottom: `0.7rem` }}>Métiers techniques de l'Etat</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus quam
      excepturi? Repudiandae corrupti accusantium, vero soluta nostrum quam rem
      a, veritatis aliquam odit ut possimus sed blanditiis, facilis maiores.
    </p>
    <div className="rf-highlight">
      Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir :
      les CAF versent automatiquement l’ARS aux familles déjà allocataires qui
      remplissent les conditions.
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus quam
      excepturi? Repudiandae corrupti accusantium, vero soluta nostrum quam rem
      a, veritatis aliquam odit ut possimus sed blanditiis, facilis maiores.
    </p>

    <h3 style={{ marginBottom: `0.7rem` }}>Questionnaires en cours</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Card label={'Designers'} datesSondage={'Juin-Juillet 2021'} />
      <Card label={'Data scientists'} datesSondage={'Juillet-Août 2021'} />
    </div>

    <h4 style={{ marginBottom: `0.7rem` }}>
      <span className="rf-fi-calendar-line"></span> Démographie
    </h4>
    <ul>
      <li>diowdjwoi</li>
      <li>diowdjwoi</li>
    </ul>
  </Layout>
);

export default IndexPage;
