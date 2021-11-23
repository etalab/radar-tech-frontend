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

export const UnTiers = Template.bind({});
UnTiers.args = {
  height: 150,
  percentage: 33,
  ariaTitle: 'titre',
  ariaDescription: 'description',
};
export const DeuxTiers = Template.bind({});
DeuxTiers.args = {
  height: 150,
  percentage: 66,
  ariaTitle: 'titre',
  ariaDescription: 'description',
};

export const Aligné: ComponentStory<typeof LabelledPie> = () => (
  <Layout noFurniture={true}>
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <LabelledPie
        height={150}
        percentage={25}
        ariaTitle={''}
        ariaDescription={''}
      />
      <div style={{ flexDirection: 'column' }}>
        <h5 style={{ color: '#000091' }}>
          Un quart des choses sont importantes.
        </h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nemo
          eligendi consectetur error, nulla eum modi qui illo placeat ex
          dignissimos eveniet cupiditate, id libero! Libero quo repellat numquam
          magni.
        </p>
      </div>
    </div>
  </Layout>
);

export const AlignéDroite: ComponentStory<typeof LabelledPie> = () => (
  <Layout noFurniture={true}>
    <div
      style={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}
    >
      <LabelledPie
        height={150}
        percentage={66}
        ariaTitle={''}
        ariaDescription={''}
      />
      <div style={{ flexDirection: 'column' }}>
        <h5 style={{ color: '#000091' }}>
          Deux tiers des choses sont importantes.
        </h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nemo
          eligendi consectetur error, nulla eum modi qui illo placeat ex
          dignissimos eveniet cupiditate, id libero! Libero quo repellat numquam
          magni.
        </p>
      </div>
    </div>
  </Layout>
);
