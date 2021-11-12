import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useDims } from 'react-dims';
import * as scale from 'd3-scale';
const d3 = { ...scale };

import { Axis } from './Axis';
import Layout from '../layout';

export default {
  title: 'Graphiques/Axe',
  component: Axis,
} as ComponentMeta<typeof Axis>;

const settings = { paddingLeft: 20, paddingRight: 20 };

export const Linéaire: ComponentStory<typeof Axis> = () => {
  const [wrapperRef, dims] = useDims();
  const scale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([settings.paddingLeft, dims.width - settings.paddingRight]);
  return (
    <Layout noFurniture={true}>
      <div style={{ width: '100%' }}>
        <svg
          ref={wrapperRef}
          width={'100%'}
          height="200"
          style={{ border: '1px dashed #ddd' }}
        >
          <g transform={`translate(0, 120)`}>
            <Axis scale={scale} axisPath={false} scaleType={'linear'} />
          </g>
        </svg>
      </div>
    </Layout>
  );
};

export const Catégorique: ComponentStory<typeof Axis> = () => {
  const [wrapperRef, dims] = useDims();
  const scale = d3
    .scaleBand()
    .domain(['Marié.e', 'Sans enfant', 'Sandwich', 'Mer Noire'])
    .rangeRound([settings.paddingLeft, dims.width - settings.paddingRight]);
  return (
    <Layout noFurniture={true}>
      <div style={{ width: '100%' }}>
        <svg
          ref={wrapperRef}
          width={'100%'}
          height="200"
          style={{ border: '1px dashed #ddd' }}
        >
          <g transform={`translate(0, 120)`}>
            <Axis scale={scale} axisPath={false} scaleType={'categorical'} />
          </g>
        </svg>
      </div>
    </Layout>
  );
};
