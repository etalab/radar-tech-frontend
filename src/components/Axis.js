import React, { useMemo } from 'react';
import * as scale from 'd3-scale';
const d3 = { ...scale };

const Axis = ({ domain = [0, 100], range = [0, 100], axisType, axisPath }) => {
  const ticks = useMemo(() => {
    const xScale = d3.scaleBand().domain(domain).rangeRound(range);
    const width = range[1] - range[0];
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    if (axisType === 'ordinal') {
      return domain.map(value => ({ value, xOffset: xScale(value) }));
    } else {
      return xScale.ticks(numberOfTicksTarget).map(value => ({
        value,
        xOffset: xScale(value),
      }));
    }
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

export default Axis;
