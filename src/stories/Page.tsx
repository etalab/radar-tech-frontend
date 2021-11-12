import React from 'react';
import { useDims } from 'react-dims';

import { SectionIndent } from '../components/SectionIndent';
import { SectionHeader } from '../components/SectionHeader';
import { Axis } from '../components/charts/Axis';
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

export const Page = () => {
  const [wrapperRef, dimensions] = useDims();
  return (
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
      <h4>Ceci est un mini axe SVG</h4>
      <svg ref={wrapperRef} style={{ width: '100%', height: '40px' }}>
        <Axis
          dims={dimensions}
          settings={{ paddingLeft: 10, paddingRight: 10 }}
          domain={['Marié.e', 'Sans enfant', 'Sandwich', 'Mer Noire']}
          axisPath={false}
          scaleType={'categorical'}
        />
      </svg>
      <LoremIpsum />
    </article>
  );
};
