import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as selection from 'd3-selection';
import { useResizeObserver } from './utils/resizeObserver.js';
const d3 = { ...selection };

function ResponsiveChartTemplate(props) {
  const svgRef = useRef(null);
  const markerRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const marker = d3.select(markerRef.current);

    if (!dimensions) return;

    svg
      .attr('width', `${dimensions.width - 10}px`)
      .attr('height', '100px')
      .style('transform', `translateX(5px)`)
      .style('border', '1px solid steelblue');

    marker.text(`dimensions: ${dimensions.width}, ${dimensions.height}`);
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
        <text ref={markerRef} transform={`translate(10,40)`}></text>
      </svg>
    </div>
  );
}

ResponsiveChartTemplate.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ResponsiveChartTemplate;
