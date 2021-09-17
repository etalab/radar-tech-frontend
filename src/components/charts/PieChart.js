import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveOrdinalFrame = require("semiotic/lib/ResponsiveOrdinalFrame");

const frameProps = {
  size: [300, 300],
  responsiveWidth: true,
  margin: 70,
  type: { type: 'bar', innerRadius: 50 },
  projection: 'radial',
  // dynamicColumnWidth: 'tweets',
  oAccessor: 'key',
  style: { fill: '#ac58e5', stroke: 'white' },
  title: 'Titre par défaut',
  oLabel: true,
};

function SemioticPieChart(props) {
  frameProps.title = props.title ? props.title : null;
  frameProps.dynamicColumnWidth = props.dynamicColumnWidth
    ? props.dynamicColumnWidth
    : null;
  frameProps.data = props.data;
  
  return (
    <div style={{ border: `1px solid steelblue` }}>
      <ResponsiveOrdinalFrame {...frameProps} />
    </div>
  );
}

SemioticPieChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  dynamicColumnWidth: PropTypes.string.isRequired,
};

export default SemioticPieChart;
