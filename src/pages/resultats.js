import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ChartTemplate from '../components/ChartTemplate';

import { useStaticQuery, graphql } from 'gatsby';
const d3 = Object.assign({}, require('d3-collection'));

const groupBy = (arr, key) =>
  d3
    .nest()
    .key(d => d[key])
    .rollup(d => {
      return { n: d.length, pct: ((100 * d.length) / arr.length).toFixed(1) };
    })
    .entries(arr)
    .sort((a, b) => b.value.n - a.value.n);

const ResultatsPage = () => {
  const { radarTechTest } = useStaticQuery(graphql`
    query myQuery {
      radarTechTest {
        answer {
          demo_genre
          demo_age
        }
      }
    }
  `);

  const data = radarTechTest.answer;
  const gender_keyed = groupBy(data, 'demo_genre');
  const age_keyed = groupBy(data, 'demo_age');

  return (
    <Layout>
      <SEO title="Résultats" />
      <h1>page des résultats</h1>
      <p>
        <b>{data.length}</b> résultats dans la DB.
      </p>

      <ChartTemplate />

      <h4>Gender</h4>
      <ul>
        {gender_keyed.map((e, i) => (
          <li key={i}>
            {e.value.n} identifiant comme {e.key}s ({e.value.pct}%)
          </li>
        ))}
      </ul>

      <h4>Age</h4>
      <ul>
        {age_keyed.map((e, i) => (
          <li key={i}>
            {e.value.n} entre {e.key} ans ({e.value.pct}%)
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ResultatsPage;
