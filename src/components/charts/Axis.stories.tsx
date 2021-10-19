import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Axis } from './Axis';
import Layout from '../layout';

export default {
  title: 'Graphiques/Axe',
  component: Axis,
} as ComponentMeta<typeof Axis>;

const width = 400;

const Template: ComponentStory<typeof Axis> = args => (
  <React.Fragment>
    <Layout noFurniture={true}>
      <svg width={width} height="200" style={{ border: '1px dashed #ddd' }}>
        <g transform={`translate(20, 50)`}>
          <Axis {...args} />
        </g>
      </svg>
    </Layout>
  </React.Fragment>
);

export const LinéaireParDéfaut = Template.bind({});
LinéaireParDéfaut.args = {
  parentWidth: width - 40,
  domain: [0, 100],
  axisPath: false,
  scaleType: 'linear',
};

export const LinéaireAvecLigne = Template.bind({});
LinéaireAvecLigne.args = {
  parentWidth: width - 40,
  domain: [0, 100],
  axisPath: true,
  scaleType: 'linear',
};

export const CategoricalParDéfaut = Template.bind({});
CategoricalParDéfaut.args = {
  parentWidth: width - 40,
  domain: ['Marié.e', 'Sans enfant', 'Sandwich', 'Mer Noire'],
  axisPath: false,
  scaleType: 'categorical',
};

export const CategoricalAvecLigne = Template.bind({});
CategoricalAvecLigne.args = {
  parentWidth: width - 40,
  domain: ['Marié.e', 'Sans enfant', 'Sandwich', 'Mer Noire'],
  axisPath: true,
  scaleType: 'categorical',
};
