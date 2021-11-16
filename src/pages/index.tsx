import React from 'react';
import { graphql, Link } from 'gatsby';
import './css/home.scss';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Card from '../././components/design-systeme/components/Card';
import SubscribeBar from '../././components/design-systeme/components/SubscribeBar';

type QueryPageMetier = {
  data: {
    metier: {
      nodes: [
        {
          metier: string;
          metier_str: string;
          metier_icon: string;
          nameSlug: string;
          key: number;
        }
      ];
    };
  };
};

// { data } nous vient de la query en bas de ce fichier
// pour les besoins de cette démo, on ne render qu'une liste
// de page métiers contenus dans notre JSON source
const IndexPage = ({ data }: QueryPageMetier) => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <section className="fr-mb-5w">
        <h1 style={{ marginBottom: `0.7rem` }}>RadarTech a besoin de vous</h1>
        <p className="fr-text fr-mb-2w">
          L'État compte dans ses rangs <b>20 000 personnels techniques</b>:
          designers, dévelopeurs, data scientists, mais aussi ingénieurs,
          supports technique et architectes.
        </p>
        <p className="fr-text fr-mb-2w">
          <b>
            Nous recensons la grande diversité des compétences techniques du
            service public.
          </b>
        </p>
        <p className="fr-text fr-mb-2w">
          Nous étudions les cheminements dans les métiers publics, les
          mouvements internes, ainsi que les désirs d'évolution, de formation.
        </p>
        <p className="fr-text fr-mb-2w">
          Et nous mettons en valeur la diversité et l'étendue des compétences du
          service public.
        </p>
        <div className="fr-highlight">
          Les résultats de cette étude seront présentés au Forum de l'emploi
          Tech de l'État 2021.
          <br />
          Les questionnaires ciblant les différentes communautés techniques
          s'échelonnent du printemps à l'automne 2021.
        </div>
      </section>

      <section className="fr-mb-5w fr-mt-5w">
        <h3 className="fr-mb-2w">Questionnaires en cours</h3>
        <div className="questionnairesCaroussel">
          {data.metier.nodes.map((e, i) => (
            <Link to={e.nameSlug} key={i}>
              <Card
                label={e.metier_str}
                datesSondage={'Juin-Juillet 2021'}
                icon={e.metier_icon}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="fr-mb-5w fr-mt-5w">
        <h3 className="fr-mt-4w fr-mb-2w">Gardons le contact</h3>
        <p className="fr-text fr-mb-2w">
          Nous aimerions vous tenir informé de la publication du questionnaires
          s'adressant à vos communautés, ainsi que des résultats. Abonnez-vous à
          notre lettre d'information ci-dessous:
        </p>
        <SubscribeBar />
      </section>
      <section className="fr-mb-5w fr-mt-5w">
        <h4 className="fr-mt-4w fr-mb-2w">
          <span className="fr-fi-calendar-line"></span> Calendrier à venir des
          questionnaires-communautés
        </h4>
        <ul>
          <li>
            <b>Été 2021:</b> IT et développeurs
          </li>
          <li>
            <b>Automne 2021:</b> Gestionnaires de projets
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    metier: allPageMetier {
      nodes {
        metier
        metier_str
        metier_icon
        nameSlug: gatsbyPath(filePath: "/metiers/{PageMetier.metier}")
        key
      }
    }
  }
`;
