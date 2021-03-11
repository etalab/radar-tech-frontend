import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../././components/design-systeme/components/Card';
import SubscribeBar from '../././components/design-systeme/components/SubscribeBar';

const designerPic = require('../images/icon-designers.svg') as string;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ marginBottom: `0.7rem` }}>RadarTech a besoin de vous</h1>
    <p>
      L'État compte dans ses rangs 20 000 personnels techniques. Designers,
      dévelopeurs, data scientists, mais aussi ingénieurs, supports technique et
      architectes. Nous recensons la grande diversité des compétences techniques
      du service public.
    </p>
    <p>
      Nous étudions les cheminements dans les métiers publics, les mouvements
      internes, ainsi que les désirs d'évolution, de formation.
    </p>
    <p>
      Et nous mettons en valeur la diversité et l'étendue des compétences du
      service public.
    </p>
    <div className="rf-highlight">
      Les résultats de cette étude seront présentés au Forum de l'emploi Tech de
      l'État 2021.
      <br />
      Les questionnaires ciblant les différentes communautés techniques
      s'échelonnent du printemps à l'automne 2021.
    </div>

    <h3 style={{ marginBottom: `0.7rem` }}>Gardons le contact</h3>
    <p>
      Nous aimerions vous tenir informé de la publication du questionnaires
      s'adressant à vos communautés, ainsi que des résultats. Abonnez-vous à
      notre lettre d'information ci-dessous:
    </p>
    <SubscribeBar />

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
      <span className="rf-fi-calendar-line"></span> Calendrier à venir des
      questionnaires-communautés
    </h4>
    <ul>
      <li>
        <b>Été 2021:</b> IT et systèmes
      </li>
      <li>
        <b>Automne 2021:</b> Ingénieurs et architectes
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
