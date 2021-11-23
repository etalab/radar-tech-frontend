import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelledPie } from '../components/charts/LabelledPie';
import Layout from '../components/layout';

export default {
  title: 'Graphiques/Camembert',
  component: LabelledPie,
} as ComponentMeta<typeof LabelledPie>;

const Template: ComponentStory<typeof LabelledPie> = args => (
  <React.Fragment>
    <Layout noFurniture={true}>
      <LabelledPie {...args} />
    </Layout>
  </React.Fragment>
);

export const ParDéfaut = Template.bind({});
ParDéfaut.args = {
  height: 150,
  percentage: 12,
  ariaTitle: 'titre',
  ariaDescription: 'description',
};
