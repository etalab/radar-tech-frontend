import React, { useMemo } from 'react';
import { useDims } from 'react-dims';
import * as scale from 'd3-scale';
import * as array from 'd3-array';
const d3 = { ...scale, ...array };
import { Axis } from './Axis';

interface ColumnChartProps {
  data: { id: any; value: number }[];
  height: number;
}

export const ColumnChart = ({ data, height }: ColumnChartProps) => {
  const [wrapperRef, dimensions] = useDims();
  const { width } = dimensions;

  const settings = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 40,
  };

  const xDomain = data.map(e => e.id);
  const xRange = [0, width];
  const xPadding = 0.1;
  const xScale = useMemo(
    () => d3.scaleBand().domain(xDomain).rangeRound(xRange).padding(xPadding),
    [dimensions, data]
  );

  const yDomain = [0, d3.max(data.map(e => e.value))];
  const yRange = [
    height - (settings.paddingBottom ? settings.paddingBottom : 0),
    3,
  ];
  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain(yDomain as [number, number])
        .range(yRange),
    [data, dimensions]
  );

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
          fill={'lavender'}
          rx={4}
        />
      ))}
      <g transform={`translate(0,${height - 40})`}>
        <Axis scale={xScale} axisPath={false} scaleType={'categorical'} />
      </g>
      <g className="overlays">
        {data.map((e, i) => {
          if (height - yScale(e.value) > 70 && xScale.bandwidth() > 30) {
            return (
              <text
                key={i}
                // @ts-expect-error
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
