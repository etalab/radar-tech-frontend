import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
//import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SurveyComponent } from '../components/Survey';

type GraphQLQuestionnaireResult = {
  site: { siteMetadata: { questionnaire_url: string } };
};

const IndexPage = () => {
  const siteMetadata: GraphQLQuestionnaireResult = useStaticQuery(graphql`
    query questionnaireUrl {
      site {
        siteMetadata {
          title
          description
          questionnaire_url
        }
      }
    }
  `);
  const questionnaire_url: string =
    siteMetadata.site.siteMetadata.questionnaire_url;

  return (
    <Layout>
      <SEO title="Home" />
      <SurveyComponent questionnaire_url={questionnaire_url} />
    </Layout>
  );
};

export default IndexPage;
