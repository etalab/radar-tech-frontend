import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { SurveyComponent } from '../components/Survey'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex`, flexDirection: `row` }}>
      <div
        style={{
          minWidth: `150px`,
          maxWidth: `200px`,
          marginBottom: `1.45rem`,
          marginRight: `2rem`,
        }}
      >
        <Image />
      </div>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to the sondage</p>
      </div>
    </div>

    <SurveyComponent />

    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
