import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SurveyComponent } from '../components/Survey';

import buildSurveys from '../components/utils/assembleSurveys';

function DesignersPage({ data }) {
  const questionnaireData = buildSurveys(
    data.allContentJson.nodes,
    'questions communes',
    'designers'
  );

  return (
    <Layout>
      <SEO title="Home" />
      <SurveyComponent questionnaireData={questionnaireData} />
    </Layout>
  );
}

export default DesignersPage;

export const query = graphql`
  query QuestionsDesign {
    allContentJson(
      filter: { key: { in: ["questions communes", "designers"] } }
    ) {
      nodes {
        key
        pages {
          name
          title
          elements {
            type
            name
            title
            isRequired
            colCount
            visibleIf
            hasOther
            choices
            validators {
              type
            }
          }
        }
        showQuestionNumbers
        title
        completedHtml
      }
    }
  }
`;
