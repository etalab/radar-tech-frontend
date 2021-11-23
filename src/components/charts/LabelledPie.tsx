import React, { useMemo } from 'react';
import { useDims } from 'react-dims';
import * as shape from 'd3-shape';
import * as path from 'd3-path';
const d3 = { ...shape, ...path };

interface LabelledPieProps {
  percentage: number;
  height: number;
  ariaTitle: string;
  ariaDescription: string;
}

export const LabelledPie = ({
  percentage,
  height,
  ariaTitle,
  ariaDescription,
}: LabelledPieProps) => {
  const [wrapperRef, dimensions] = useDims();
  const { width } = dimensions;
  const radius = height / 2;
  const arc = useMemo(
    () =>
      d3
        .arc()
        .innerRadius(radius * 0.8)
        .outerRadius(radius - 1)
        .cornerRadius(6),
    [height, percentage]
  );
  const pie = d3.pie().padAngle(0).sort(null);
  const arcs = pie([percentage, 100 - percentage]);

  return (
    <svg
      role={'img'}
      aria-labelledby={'title desc'}
      ref={wrapperRef}
      width={'100%'}
      height={height}
    >
      <title id="title">{ariaTitle}</title>
      <desc id="desc">{ariaDescription}</desc>
      <g transform={`translate(${width / 2},${height / 2})`}>
        {arcs.map((e, i) => (
          <path
            key={i}
            // @ts-expect-error
            d={arc(e)}
            fill={i === 0 ? '#000091' : '#0002'}
            stroke={'#fff'}
          />
        ))}
        <text
          style={{
            textAnchor: 'middle',
            fontWeight: 'bold',
            fontSize: '2rem',
            fill: '#000091',
          }}
          dominantBaseline={'central'}
        >
          {percentage}%
        </text>
      </g>
    </svg>
  );
};
