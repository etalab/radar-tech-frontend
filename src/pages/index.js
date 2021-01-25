import React from 'react';
//import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SurveyComponent } from '../components/Survey';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SurveyComponent />
  </Layout>
);

export default IndexPage;
