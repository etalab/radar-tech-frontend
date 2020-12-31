import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SemioticPieChart from '../components/PieChart';
import ResponsiveChartTemplate from '../components/ChartTemplate';

import ChartWithDimensions from '../components/TestChart';

import { useStaticQuery, graphql } from 'gatsby';
const d3 = Object.assign({}, require('d3-collection'));

import {
  GraphQLResults,
  KeyedResult,
  FlatResult,
} from '../components/utils/types';

// compte les uniques dans une array. par exemple:
//      [{nom: "basile"}, {nom: "basile"}, {nom: "lapin"}]
// retourne:
//      [{key: "basile", values: Array(2)},
//       {key: "lapin", values: Array(1)}]
const groupBy = (arr: [], key: string): KeyedResult[] =>
  d3
    .nest()
    .key(d => d[key])
    .entries(arr);

// on utiliserait classiquement `.rollup()` de `d3.nest()`, mais ça
// nous pose des problèmes d'inférence de types.
const flatten = (arr: KeyedResult[], totalLength: number): FlatResult[] =>
  arr
    .map(d => {
      return {
        key: d.key,
        n: d.values.length,
        pct: parseFloat(((100 * d.values.length) / totalLength).toFixed(1)),
      };
    })
    .sort((a, b) => b.n - a.n);

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

  const gender_data: [] = gender_results.radarTechTest.answer;
  const gender_keyed: KeyedResult[] = groupBy(gender_data, 'demo_genre');
  const gender_flat: FlatResult[] = flatten(gender_keyed, gender_data.length);

  return (
    <Layout>
      <SEO title="Résultats" />
      <p>
        <b>{gender_data.length}</b> résultats dans la DB.
      </p>

      <section>
        <h3 style={{ marginBottom: `0.7rem` }}>Démographie</h3>
        <ul style={{ height: `100px` }}>
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

        <h4>Test other wrapper</h4>
        <ChartWithDimensions />

        <h4>Responsive chart template type Basile</h4>
        <ResponsiveChartTemplate data={gender_flat} />

        <h4>Pie chart type Semiotic</h4>
        <SemioticPieChart data={gender_flat} dynamicColumnWidth={'pct'} />
      </section>
    </Layout>
  );
};

export default ResultatsPage;
