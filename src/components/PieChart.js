import React from 'react';
import PropTypes from 'prop-types';

//const ResponsiveOrdinalFrame = typeof window !== `undefined` ? require("semiotic/lib/ResponsiveOrdinalFrame") : <div></div>;

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
  //<ResponsiveOrdinalFrame {...frameProps} />
  return (
    <div style={{ border: `1px solid steelblue` }}>
      
    </div>
  );
}

SemioticPieChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  dynamicColumnWidth: PropTypes.string.isRequired,
};

export default SemioticPieChart;
