import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from '../layout';
import { ColumnChart } from './ColumnChart';

export default {
  title: 'Graphiques/Colonnes',
  component: ColumnChart,
} as ComponentMeta<typeof ColumnChart>;

const dummyData = new Array(10).fill({}).map((e, i) => ({
  id: i + 1,
  value: Math.round(Math.random() * 100),
}));

export const Défaut: ComponentStory<typeof ColumnChart> = () => (
  <Layout noFurniture={true}>
    <div style={{ width: '60%', height: '400px', margin: '0 auto' }}>
      <ColumnChart
        data={dummyData}
        height={400}
        ariaTitle={'Petit graphique'}
        ariaDescription={'Simple description'}
      />
    </div>
  </Layout>
);

const valueRandom = (): number => Math.round(Math.random() * 100);
const autreDummyData = [
  { id: 'Marié.e', value: valueRandom() },
  { id: 'Sans enfant', value: valueRandom() },
  { id: 'Sandwich', value: valueRandom() },
  { id: 'Mer Noire', value: valueRandom() },
];

export const MoinsDeColonnes: ComponentStory<typeof ColumnChart> = () => (
  <Layout noFurniture={true}>
    <div style={{ width: '60%', height: '400px', margin: '0 auto' }}>
      <ColumnChart
        data={autreDummyData}
        height={400}
        ariaTitle={'Petit graphique'}
        ariaDescription={'Simple description'}
      />
    </div>
  </Layout>
);
