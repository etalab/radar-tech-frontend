import React, { useMemo } from 'react';
import * as scale from 'd3-scale';
const d3 = { ...scale };

interface AxisProps {
  parentWidth: number;
  domain: [number, number];
  axisPath?: boolean;
}

export const AxisLinear = ({
  parentWidth,
  domain,
  axisPath,
}: AxisProps) => {
  const range = [0, parentWidth];
  const ticks = useMemo(() => {
    const xScale = d3.scaleLinear().domain(domain).rangeRound(range);
    const width = range[1] - range[0];
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    return xScale.ticks(numberOfTicksTarget).map(value => ({
      value,
      xOffset: xScale(value),
    }));
  }, [domain, range]);

  return (
    <g>
      {axisPath && (
        <path
          d={['M', range[0], 6, 'v', -6, 'H', range[1], 'v', 6].join(' ')}
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
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translate(-5px,25px) rotate(-45deg)',
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </g>
  );
};
