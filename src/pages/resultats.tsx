import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SemioticPieChart from '../components/PieChart';
import ResponsiveChartTemplate from '../components/ChartTemplate';

import { useStaticQuery, graphql } from 'gatsby';
const d3 = Object.assign({}, require('d3-collection'));

import { GraphQLResults } from '../components/utils/types';

const groupBy = (arr, key) =>
  d3
    .nest()
    .key(d => d[key])
    .rollup((d: any) => ({
      n: d.length,
      yo: 'foo',
      pct: parseFloat(((100 * d.length) / arr.length).toFixed(1)),
    }))
    .entries(arr)
    .sort((a, b) => b.value.n - a.value.n);

const flatten = arr =>
  arr.map(e => ({
    key: e.key,
    foo: 'bar',
    n: e.value.n,
    pct: e.value.pct,
  }));

const ResultatsPage = () => {
  const gender_results: GraphQLResults = useStaticQuery(graphql`
    query myQuery {
      radarTechTest {
        answer {
          demo_genre
        }
      }
    }
  `);

  const gender_data = gender_results.radarTechTest.answer;
  const gender_keyed = groupBy(gender_data, 'demo_genre');
  const gender_flat = flatten(gender_keyed);

  return (
    <Layout>
      <SEO title="Résultats" />
      <h1>page des résultats</h1>
      <p>
        <b>{gender_data.length}</b> résultats dans la DB.
      </p>

      <h4>Gender breakdown</h4>
      <ul>
        {gender_flat.map((e, i) => (
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
      <ResponsiveChartTemplate data={gender_flat} />

      <h4>Pie chart type Semiotic</h4>
      <SemioticPieChart data={gender_flat} dynamicColumnWidth={'pct'} />
    </Layout>
  );
};

export default ResultatsPage;
