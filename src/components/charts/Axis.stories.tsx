import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useDims } from 'react-dims';

import { Axis } from './Axis';
import Layout from '../layout';

export default {
  title: 'Graphiques/Axe',
  component: Axis,
} as ComponentMeta<typeof Axis>;

const Template: ComponentStory<typeof Axis> = args => {
  const [wrapperRef, dims] = useDims();
  return (
    <React.Fragment>
      <Layout noFurniture={true}>
        <div style={{ width: '100%' }}>
          <svg
            ref={wrapperRef}
            width={'100%'}
            height="200"
            style={{ border: '1px dashed #ddd' }}
          >
            <g transform={`translate(0, 50)`}>
              <Axis {...args} dims={dims} />
            </g>
          </svg>
        </div>
      </Layout>
    </React.Fragment>
  );
};

const settings = { paddingLeft: 20, paddingRight: 20 };

export const LinéaireParDéfaut = Template.bind({});
LinéaireParDéfaut.args = {
  domain: [0, 100],
  settings,
  axisPath: false,
  scaleType: 'linear',
};

export const LinéaireAvecLigne = Template.bind({});
LinéaireAvecLigne.args = {
  domain: [0, 100],
  settings,
  axisPath: true,
  scaleType: 'linear',
};

export const CategoricalParDéfaut = Template.bind({});
CategoricalParDéfaut.args = {
  domain: ['Marié.e', 'Sans enfant', 'Sandwich', 'Mer Noire'],
  settings,
  axisPath: false,
  scaleType: 'categorical',
};

export const CategoricalAvecLigne = Template.bind({});
CategoricalAvecLigne.args = {
  domain: ['Marié.e', 'Sans enfant', 'Sandwich', 'Mer Noire'],
  settings,
  axisPath: true,
  scaleType: 'categorical',
};
