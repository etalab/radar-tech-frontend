import React from 'react';
//import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SurveyComponent } from '../components/Survey';

import questionnaireData from '../content/questionnaire.json';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SurveyComponent questionnaireData={questionnaireData} />
    </Layout>
  );
};

export default IndexPage;
