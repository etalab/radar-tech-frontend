import React from 'react';

import { SectionIndent } from '../components/SectionIndent';
import { SectionHeader } from '../components/SectionHeader';
import { ChartTemplate } from '../components/charts/ChartTemplate';
import './page.css';

interface PageProps {}

const LoremIpsum = () => (
  <p>
    Nunc eleifend leo vitae magna. Aliquam erat volutpat. Nunc eleifend leo
    vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus
    ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor
    tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec
    at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id enim.
  </p>
);

export const Page = () => (
  <article style={{ width: '70%', margin: '0 auto' }}>
    <SectionHeader copy={'Ceci est donc un header de section'} />
    <LoremIpsum />
    <SectionIndent direction={'left'}>
      {{
        copy: <LoremIpsum />,
      }}
    </SectionIndent>
    <LoremIpsum />
    <SectionIndent direction={'right'}>
      {{
        header: 'Celui ci est indenté',
        copy: <LoremIpsum />,
      }}
    </SectionIndent>
    <LoremIpsum />
    <ChartTemplate />
    <LoremIpsum />
  </article>
);
