import React, { useMemo } from 'react';
import * as scale from 'd3-scale';

interface AxisProps {
  scale: scale.ScaleBand<string>;
  scaleType: 'linear' | 'categorical';
  axisPath?: boolean;
}
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
  `translate(0px, 25px) ${scaleType === 'linear' ? 'rotate(-45deg)' : ''}`;

const axisLine = (scaleType: 'linear' | 'categorical', range: number[]) => {
  const offset = scaleType === 'linear' ? 6 : 0;
  // prettier-ignore
  return ['M', range[0], offset, 'v', -offset, 'H', range[1], 'v', offset].join(' ');
};

export const Axis = ({ scale, scaleType, axisPath }: AxisProps) => {
  const range = scale.range();
  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));
    return getTicks(scale, scaleType, numberOfTicksTarget);
  }, [scale, range]);

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
