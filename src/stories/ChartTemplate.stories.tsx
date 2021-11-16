import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartTemplate } from '../components/charts/ChartTemplate';
import Layout from '../components/layout';

export default {
  title: 'Graphiques/Simple conteneur',
  component: ChartTemplate,
} as ComponentMeta<typeof ChartTemplate>;

const Template: ComponentStory<typeof ChartTemplate> = args => (
  <Layout noFurniture={true}>
    <ChartTemplate {...args}></ChartTemplate>
  </Layout>
);

const chartSettings = {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  marginBottom: 10,
};

export const Défaut = Template.bind({});
Défaut.args = { settings: chartSettings, defaultHeight: 100 };
