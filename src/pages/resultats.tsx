import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import TestChart from '../components/TestChart';
import WeePeopleBar from '../components/WeePeopleBar.js';

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
    .map(d => ({
      key: d.key,
      n: d.values.length,
      pct: parseFloat(((100 * d.values.length) / totalLength).toFixed(1)),
    }))
    .sort((a, b) => b.n - a.n)
    .filter(d => d.key !== 'null');

const ResultatsPage = () => {
  const results_data: GraphQLResults = useStaticQuery(graphql`
    query myQuery {
      radarTechTest {
        answer {
          demo_genre
          demo_age
        }
      }
    }
  `);

  const results: [] = results_data.radarTechTest.answer;

  // gender data
  const gender_keyed: KeyedResult[] = groupBy(results, 'demo_genre');
  const gender_flat: FlatResult[] = flatten(gender_keyed, results.length);

  // age data
  const age_keyed: KeyedResult[] = groupBy(results, 'demo_age');
  const age_flat: FlatResult[] = flatten(
    age_keyed,
    results.length
  ).sort((a, b) => a.key.localeCompare(b.key));
  console.log(age_keyed);

  return (
    <Layout>
      <SEO title="Résultats" />
      <p>
        <b>{results.length}</b> résultats dans la DB.
      </p>

      <section>
        <h3 style={{ marginBottom: `0.7rem` }}>Démographie</h3>
        <WeePeopleBar data={gender_flat} />
        <p>
          Note:{' '}
          {results.length - gender_flat.map(e => e.n).reduce((a, b) => a + b)}
          réponse(s) exclue(s) car invalide (null)
        </p>
      </section>
      <section>
        <h3 style={{ marginBottom: `0.7rem` }}>Age</h3>
        <WeePeopleBar data={age_flat} />
        <p>
          Note:{' '}
          {results.length - age_flat.map(e => e.n).reduce((a, b) => a + b)}
          réponse(s) exclue(s) car invalide (null)
        </p>
      </section>
    </Layout>
  );
};

export default ResultatsPage;
