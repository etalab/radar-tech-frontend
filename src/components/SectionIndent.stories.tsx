import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionIndent } from './SectionIndent';
import Layout from './layout';

export default {
  title: 'Example/SectionIndent',
  component: SectionIndent,
} as ComponentMeta<typeof SectionIndent>;

const Template: ComponentStory<typeof SectionIndent> = args => (
  <React.Fragment>
    <Layout noFurniture={true}>
      <SectionIndent>
        {{
          copy: (
            <p>
              Nunc eleifend leo vitae magna. Aliquam erat volutpat. Nunc
              eleifend leo vitae magna. In id erat non orci commodo lobortis.
              Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.
              Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris
              ac felis vel velit tristique imperdiet. Donec at pede. Etiam vel
              neque nec dui dignissim bibendum. Vivamus id enim.
            </p>
          ),
        }}
      </SectionIndent>
    </Layout>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {};
