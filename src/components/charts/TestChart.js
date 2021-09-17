import React, { useRef, useMemo } from 'react';
import { calculateChartDimensions } from './utils/use-dimensions';

import * as scale from 'd3-scale';
import * as array from 'd3-array';

import Axis from './Axis';

const d3 = { ...scale, ...array };

const chartSettings = {
  marginLeft: 0,
  marginRight: 0,
};

const TestChart = () => {
  let ref = useRef();
  let dimensions;
  [ref, dimensions] = calculateChartDimensions(chartSettings, ref);
  const xScale = useMemo(
    () => d3.scaleLinear().domain([0, 100]).range([0, dimensions.boundedWidth]),
    [dimensions]
  );
  return (
    <div className="Chart__wrapper" ref={ref} style={{ height: '200px' }}>
      <svg width={dimensions.width} height={dimensions.height}>
        <g
          transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}
        >
          <rect
            //width={dimensions.boundedWidth}
            width={xScale(45)}
            height={dimensions.boundedHeight}
            fill="lavender"
          />
          <g transform={`translate(0, ${dimensions.boundedHeight})`}>
            <Axis domain={xScale.domain()} range={xScale.range()} />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TestChart;
