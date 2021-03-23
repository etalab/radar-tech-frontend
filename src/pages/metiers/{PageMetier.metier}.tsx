import * as React from 'react';
import { graphql } from 'gatsby';
import SondageView from '../SondageView';

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

// `Questionnaire` is a GraphQL Fragment typed in
// utils/QuestionnaireFragment.tsx
export const query = graphql`
  query($id: String!) {
    pageMetier(id: { eq: $id }) {
      metier
      description
      meta {
        id
      }
      questionnaire {
        ...Questionnaire
      }
    }
  }
`;
