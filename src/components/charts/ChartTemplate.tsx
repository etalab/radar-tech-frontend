import React, { useRef, useEffect } from 'react';
import * as selection from 'd3-selection';
import { useResizeObserver } from '../utils/resizeObserver.js';
import { calculateChartDimensions } from '../utils/use-dimensions';
const d3 = { ...selection };

export const ChartTemplate = ({ settings, defaultHeight }) => {
  const svgRef = useRef(null);
  const markerRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = calculateChartDimensions(
    { ...settings, height: defaultHeight },
    // @ts-expect-error
    wrapperRef
  );

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const marker = d3.select(markerRef.current);

    if (!dimensions) return;

    svg
      .attr('width', `${dimensions.width}px`)
      .attr('height', `${dimensions.height}px`)
      .style('background-color', 'aliceblue')
      .style('border', '1px solid steelblue');

    marker.html(
      `dimensions utiles: ${dimensions.boundedWidth}, ${dimensions.boundedHeight}`
    );
  }, [dimensions]);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: `100%`,
        height: `100px`,
      }}
      className="chartTemplate"
    >
      <svg ref={svgRef}>
        <rect
          fill={`white`}
          x={dimensions.marginLeft}
          y={dimensions.marginTop}
          width={dimensions.boundedWidth}
          height={dimensions.boundedHeight}
        />
        <text
          fill={`#111`}
          x={dimensions.marginLeft}
          y={dimensions.marginTop}
          dy={15}
        >
          Voici un graphique SVG pleine largeur
        </text>
        <text
          fill={`#111`}
          ref={markerRef}
          x={dimensions.marginLeft}
          y={dimensions.marginTop}
          dy={45}
        ></text>
      </svg>
    </div>
  );
};
