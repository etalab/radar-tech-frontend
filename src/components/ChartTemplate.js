import React, { useRef, useEffect, useState } from 'react';
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

function ChartTemplate() {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    console.log(dimensions);

    if (!dimensions) return;

    svg
      .attr('width', `${dimensions.width - 10}px`)
      .attr('height', '100px')
      .style('transform', `translateX(5px)`)
      .style('background-color', 'steelblue');
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
      <svg ref={svgRef} style={{ backgroundColor: `aliceblue` }}></svg>
    </div>
  );
}

export default ChartTemplate;
