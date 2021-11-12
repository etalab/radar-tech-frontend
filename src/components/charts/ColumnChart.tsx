import { any } from 'prop-types';
import React from 'react';
import { useDims } from 'react-dims';
import * as scale from 'd3-scale';
const d3 = { ...scale };
import { Axis } from './Axis';

interface ColumnChartProps {
  data: { id: any; value: number }[];
  height: number;
}

export const ColumnChart = ({ data, height }: ColumnChartProps) => {
  const [wrapperRef, dimensions] = useDims();
  const { width } = dimensions;
  const axisDomain = data.map(e => e.id);
  const range = [0, width];
  const xScale = d3
    .scaleBand()
    .domain(axisDomain)
    .rangeRound(range)
    .padding(0.1);
  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - 40, 0]);

  return (
    <svg
      ref={wrapperRef}
      width={'100%'}
      height={height}
      style={{ border: '1px dashed #ddd' }}
    >
      {data.map((e, i) => (
        <rect
          key={i}
          x={xScale(e.id)}
          y={yScale(e.value)}
          width={xScale.bandwidth()}
          height={height - yScale(e.value) - 40}
          fill={'steelblue'}
          rx={4}
        />
      ))}
      <g transform={`translate(0,${height - 40})`}>
        <Axis
          settings={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 40 }}
          domain={axisDomain}
          dims={dimensions}
          axisPath={false}
          scaleType={'categorical'}
        />
      </g>
      <g className="overlays">
        {data.map((e, i) => {
          console.log(e.value, height - yScale(e.value));
          if (height - yScale(e.value) > 70 && xScale.bandwidth() > 30) {
            return (
              <text
                key={i}
                x={xScale(e.id) + xScale.bandwidth() / 2}
                y={yScale(e.value) + 20}
                style={{
                  fontSize: `0.7rem`,
                  fill: `white`,
                  textAnchor: 'middle',
                }}
              >
                {e.value}
              </text>
            );
          } else return null;
        })}
      </g>
    </svg>
  );
};
