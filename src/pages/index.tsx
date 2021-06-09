import React from 'react';
import { graphql, Link } from 'gatsby';
import { compose, join, juxt, toUpper, head, tail } from 'ramda';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import { SurveyComponent } from '../components/Survey';
// import buildSurveys from '../components/utils/assembleSurveys';

type QueryPageMetier = {
  data: {
    metier: {
      nodes: [
        { metier: string; metier_str: string; nameSlug: string; key: number }
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
      <SEO title="Home" />
      <h3>testing un déploiement</h3>
      <ul>
        {data.metier.nodes.map(e => (
          <li key={e.key}>
            <Link to={e.nameSlug}>{e.metier_str}</Link>
          </li>
        ))}
        <li>
          <Link to={`/metiers/chambouleur`}>Chambouleur</Link>
          {` `}
          (n'existe pas, rend notre page 404)
        </li>
      </ul>
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
        nameSlug: gatsbyPath(filePath: "/metiers/{PageMetier.metier}")
        key
      }
    }
  }
`;
