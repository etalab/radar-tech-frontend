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
      <ColumnChart data={dummyData} height={400} />
    </div>
  </Layout>
);
