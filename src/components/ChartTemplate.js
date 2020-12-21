import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as selection from 'd3-selection';
const d3 = { ...selection };

const useResizeObserver = ref => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

function ResponsiveChartTemplate(props) {
  const svgRef = useRef();
  const markerRef = useRef();
  const wrapperRef = useRef();
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
        height: `200px`,
      }}
      className="chartTemplate"
    >
      <svg ref={svgRef}>
        <text ref={markerRef} transform={`translate(10,40)`}></text>
      </svg>

      <div style={{ display: `flex`, flexDirection: `row` }}>
        {props.data.map(e => (
          <div
            key={e.key}
            style={{
              width: `${e.pct}%`,
              height: `40px`,
              margin: `1px`,
              border: `1px solid #696969`,
              borderRadius: `4px`,
              backgroundColor: `aliceblue`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            {e.pct}%
          </div>
        ))}
      </div>
    </div>
  );
}

ResponsiveChartTemplate.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ResponsiveChartTemplate;
