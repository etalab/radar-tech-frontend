import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionIndent } from './SectionIndent';
import Layout from './layout';

export default {
  title: 'Example/Section Indentée',
  component: SectionIndent,
} as ComponentMeta<typeof SectionIndent>;

const LoremIpsum = () => (
  <p>
    Nunc eleifend leo vitae magna. Aliquam erat volutpat. Nunc eleifend leo
    vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus
    ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor
    tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec
    at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id enim.
  </p>
);

export const GaucheSansHeader: ComponentStory<typeof SectionIndent>  = () => (
    <Layout noFurniture={true}>
      <SectionIndent direction={"left"}>{{ copy: <LoremIpsum /> }}</SectionIndent>
    </Layout>
);
export const GaucheAvecHeader: ComponentStory<typeof SectionIndent>  = () => (
    <Layout noFurniture={true}>
      <SectionIndent direction={"left"}>
        {{ header: 'Avec un header', copy: <LoremIpsum /> }}
      </SectionIndent>
    </Layout>
);

export const DroiteSansHeader: ComponentStory<typeof SectionIndent>  = () => (
    <Layout noFurniture={true}>
      <SectionIndent direction={"right"}>{{ copy: <LoremIpsum /> }}</SectionIndent>
    </Layout>
);
export const DroiteAvecHeader: ComponentStory<typeof SectionIndent>  = () => (
    <Layout noFurniture={true}>
      <SectionIndent direction={"right"}>
        {{ header: 'Avec un header', copy: <LoremIpsum /> }}
      </SectionIndent>
    </Layout>
);
