import React, { useMemo } from 'react';
import * as scale from 'd3-scale';
const d3 = { ...scale };

interface AxisProps {
  parentWidth: number;
  domain: any[];
  scaleType: 'linear' | 'categorical';
  axisPath?: boolean;
}

const pickScale = (scaleType: 'linear' | 'categorical', range: any[]) => {
  if (scaleType === 'linear') {
    return d3.scaleLinear().range(range);
  } else {
    return d3.scaleBand().rangeRound(range);
  }
};

const getTicks = (
  scale,
  scaleType: 'linear' | 'categorical',
  noOfTicks?: number
): { value: number | string; xOffset: number }[] => {
  if (scaleType === 'linear') {
    return scale.ticks(noOfTicks).map((value: number) => ({
      value,
      xOffset: scale(value),
    }));
  } else {
    return scale.domain().map((value: any) => ({
      value,
      xOffset: scale(value) + scale.bandwidth() / 2,
    }));
  }
};

const tickTransform = (scaleType: 'linear' | 'categorical') =>
  `translate(-5px, 25px) ${scaleType === 'linear' ? 'rotate(-45deg)' : ''}`;

const axisLine = (scaleType: 'linear' | 'categorical', range: number[]) => {
  const offset = scaleType === 'linear' ? 6 : 0;
  // prettier-ignore
  return ['M', range[0], offset, 'v', -offset, 'H', range[1], 'v', offset].join(' ');
};

export const Axis = ({
  parentWidth,
  domain,
  scaleType,
  axisPath,
}: AxisProps) => {
  const range = [0, parentWidth];
  const ticks = useMemo(() => {
    const xScale = pickScale(scaleType, range).domain(domain);
    const width = range[1] - range[0];
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));
    return getTicks(xScale, scaleType, numberOfTicksTarget);
  }, [domain, range]);

  return (
    <g>
      {axisPath && (
        <path
          d={axisLine(scaleType, range)}
          fill="none"
          stroke="currentColor"
        />
      )}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y2="6" stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: '11px',
              textAnchor: 'middle',
              transform: tickTransform(scaleType),
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </g>
  );
};
