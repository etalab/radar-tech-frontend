import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionHeader } from './SectionHeader';
import Layout from './layout';

export default {
  title: 'Example/SectionHeader',
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = args => (
  <React.Fragment>
    <Layout noFurniture={true}>
      <SectionHeader {...args} />
      <p style={{ color: '#ddd' }}>
        Ce petit bout de texte ne fait pas partie du composant Header :) Nunc
        eleifend leo vitae magna. Aliquam erat volutpat. Nunc eleifend leo vitae
        magna. In id erat non orci commodo lobortis. Proin neque massa, cursus
        ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum
        tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique
        imperdiet. Donec at pede. Etiam vel neque nec dui dignissim bibendum.
        Vivamus id enim.
      </p>
    </Layout>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  copy: 'Header par défaut',
};
