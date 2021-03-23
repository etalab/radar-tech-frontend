import * as React from 'react';
import { graphql } from 'gatsby';
import SondageView from '../Sondage-view';

import type { Metier } from '../../components/utils/types';

type QueryPageMetier = {
  data: {
    pageMetier: Metier;
  };
};

// une page métier est un Higher Order Component s'occupant
// de query les données de la page métier en question en
// matchant son `id`, et de passer ces données à une View
const PageMetier = (props: QueryPageMetier) => {
  const { pageMetier } = props.data;
  return <SondageView metier={pageMetier} />;
};

export default PageMetier;

export const query = graphql`
  query($id: String!) {
    pageMetier(id: { eq: $id }) {
      metier
      description
      meta {
        id
      }
      questionnaire {
        title
      }
    }
  }
`;
