import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SurveyComponent } from '../components/Survey';

import buildSurveys from '../components/utils/assembleSurveys';

const DesignersPage = () => {
  const questionnaireQuery = useStaticQuery(graphql`
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
  `);

  const questionnaireData = buildSurveys(
    questionnaireQuery.allContentJson.nodes,
    'questions communes',
    'designers'
  );

  console.log(questionnaireData);

  return (
    <Layout>
      <SEO title="Home" />
      <SurveyComponent questionnaireData={questionnaireData} />
    </Layout>
  );
};

export default DesignersPage;
