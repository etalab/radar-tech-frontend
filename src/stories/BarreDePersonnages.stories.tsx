import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BarreDePersonnages } from '../components/charts/BarreDePersonnages';
import Layout from '../components/layout';

export default {
  title: 'Graphiques/Barre de personnages',
  component: BarreDePersonnages,
} as ComponentMeta<typeof BarreDePersonnages>;

const Template: ComponentStory<typeof BarreDePersonnages> = args => (
  <React.Fragment>
    <Layout noFurniture={true}>
      <div style={{ width: '60%', height: '400px', margin: '0 auto' }}>
        <BarreDePersonnages {...args} />
      </div>
    </Layout>
  </React.Fragment>
);

export const ParDéfaut = Template.bind({});
ParDéfaut.args = {
  data: [
    { key: 'chose', value: 10 },
    { key: 'autre chose', value: 90 },
  ],
  height: 200,
};
