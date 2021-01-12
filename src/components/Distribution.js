import React, { useRef, useMemo } from 'react';
import { calculateChartDimensions } from './utils/use-dimensions';

import * as scale from 'd3-scale';
import * as array from 'd3-array';

import Axis from './Axis';

const d3 = { ...scale, ...array };

const chartSettings = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 50,
};

const Distribution = props => {
  const { data } = props;
  let ref = useRef();
  let dimensions;

  [ref, dimensions] = calculateChartDimensions(chartSettings, ref);
  const xScale = useMemo(
    () =>
      d3
        .scaleBand()
        .domain(data.map(e => e.key))
        .rangeRound([0, dimensions.boundedWidth]),
    [dimensions]
  );

  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, d3.max(data.map(d => d.pct))])
        .range([dimensions.boundedHeight, 0]),
    [dimensions]
  );

  console.log(
    'data',
    props.data,
    dimensions,
    yScale.domain(),
    yScale.range(),
    yScale(4)
  );
  return (
    <div className="Chart__wrapper" ref={ref} style={{ height: '200px' }}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        style={{ overflow: 'visible' }}
      >
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
            <Axis
              domain={xScale.domain()}
              range={xScale.range()}
              axisType="ordinal"
            />
          </g>
          <g className="rects">
            {data.map((d, i) => (
              <rect
                key={i}
                x={xScale(d.key) - xScale.bandwidth() / 2}
                y={yScale(d.pct)}
                width={xScale.bandwidth() - 1}
                height={dimensions.boundedHeight - yScale(d.pct)}
                fill={`steelblue`}
              ></rect>
            ))}
          </g>
          <g className="overlays">
            {data.map((d, i) => {
              if (
                dimensions.boundedHeight - yScale(d.pct) > 15 &&
                xScale.bandwidth() > 33
              ) {
                return (
                  <text
                    key={i}
                    x={xScale(d.key)}
                    y={yScale(d.pct) + 20}
                    style={{
                      fontSize: `0.7rem`,
                      fill: `white`,
                      textAnchor: 'middle',
                    }}
                  >
                    {d.pct}%
                  </text>
                );
              }
            })}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Distribution;
