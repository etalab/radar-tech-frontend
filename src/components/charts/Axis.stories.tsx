import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AxisLinear } from './Axis';
import Layout from '../layout';

export default {
  title: 'Graphiques/Axe Linéaire',
  component: AxisLinear,
} as ComponentMeta<typeof AxisLinear>;

const width = 400;

const Template: ComponentStory<typeof AxisLinear> = args => (
  <React.Fragment>
    <Layout noFurniture={true}>
      <svg width={width} height="200" style={{ border: '1px dashed #ddd' }}>
        <g transform={`translate(20, 50)`}>
          <AxisLinear {...args} />
        </g>
      </svg>
    </Layout>
  </React.Fragment>
);

export const ParDéfaut = Template.bind({});
ParDéfaut.args = { parentWidth: width - 40, domain: [0, 100], axisPath: false };

export const AvecLigne = Template.bind({});
AvecLigne.args = { parentWidth: width - 40, domain: [0, 100], axisPath: true };
