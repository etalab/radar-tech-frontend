import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SemioticPieChart from '../components/PieChart';
import ResponsiveChartTemplate from '../components/ChartTemplate';

import { useStaticQuery, graphql } from 'gatsby';
const d3 = Object.assign({}, require('d3-collection'));

const groupBy = (arr, key) =>
  d3
    .nest()
    .key(d => d[key])
    .rollup(d => {
      return {
        n: d.length,
        pct: parseFloat(((100 * d.length) / arr.length).toFixed(1)),
      };
    })
    .entries(arr)
    .sort((a, b) => b.value.n - a.value.n)
    .map(e => {
      // console.log(e);
      return {
        key: e.key,
        n: e.value.n,
        pct: e.value.pct,
      };
    });

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

      <h4>Gender breakdown</h4>
      <ul>
        {gender_keyed.map((e, i) => (
          <li
            style={{
              height: `13px`,
            }}
            key={i}
          >
            <b>{e.n}</b> identifiant comme {e.key}s ({e.pct}%)
          </li>
        ))}
      </ul>

      <h4>Responsive chart template type Basile</h4>
      <ResponsiveChartTemplate />

      <h4>Pie chart type Semiotic</h4>
      <SemioticPieChart data={gender_keyed} dynamicColumnWidth={'pct'} />

      {/* <h4>Gender</h4>
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
      </ul> */}
    </Layout>
  );
};

export default ResultatsPage;
