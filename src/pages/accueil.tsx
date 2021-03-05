import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../././components/design-systeme/components/Card';

const designerPic = require('../images/icon-designers.svg') as string;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ marginBottom: `0.7rem` }}>Participer au sondage</h1>
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
      <Card
        label={'Designers'}
        datesSondage={'Juin-Juillet 2021'}
        picture={designerPic}
      />
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
