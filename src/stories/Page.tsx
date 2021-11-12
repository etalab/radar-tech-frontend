import React from 'react';

import { SectionIndent } from '../components/SectionIndent';
import { SectionHeader } from '../components/SectionHeader';
import { ColumnChart } from '../components/charts/ColumnChart';
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

const dummyData = new Array(10).fill({}).map((e, i) => ({
  id: i + 1,
  value: Math.round(Math.random() * 100),
}));

export const Page = () => (
  <article
    style={{
      width: '70%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
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
    <h4>Ceci est un mini graphique SVG</h4>
    <svg style={{ width: '80%', height: '400px', margin: '0 auto' }}>
      <ColumnChart
        data={dummyData}
        height={400}
        ariaTitle={'Petit graphique'}
        ariaDescription={'Simple description'}
      />
    </svg>
    <LoremIpsum />
  </article>
);
