import React, { useRef, useMemo } from 'react';
import HTMLBarChart from './HTMLBarChart.js';
import { calculateChartDimensions } from './utils/use-dimensions';

import * as scale from 'd3-scale';
import * as array from 'd3-array';
import * as scaleChromatic from 'd3-scale-chromatic';

const d3 = { ...scale, ...array, ...scaleChromatic };

const chartSettings = {
  marginLeft: 0,
  marginRight: 0,
};

const WeePeopleBar = props => {
  const { data } = props;
  console.log('data', data);
  let ref = useRef();
  let dimensions;
  [ref, dimensions] = calculateChartDimensions(chartSettings, ref);

  const color = d3
    .scaleOrdinal()
    .domain(data.map(e => e.key))
    .range(d3.schemeSet2);

  // const xScale = useMemo(
  //   () => d3.scaleLinear().domain([0, 100]).range([0, dimensions.boundedWidth]),
  //   [dimensions]
  // );

  return (
    <div
      className="Chart__wrapper"
      ref={ref}
      style={{ height: '200px', marginTop: `20px` }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        style={{ border: `1px solid red` }}
      >
        <g
          transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}
        ></g>
      </svg>
      <HTMLBarChart data={gender_flat} color={color} />
    </div>
  );
};

export default WeePeopleBar;
