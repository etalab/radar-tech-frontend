import React from 'react';

export default HTMLBarChart = props => (
  <div
    style={{
      display: `flex`,
      flexDirection: `row`,
    }}
  >
    {props.data.map((e, i) => (
      <div
        key={i}
        style={{
          width: `${e.pct}%`,
          height: `20px`,
          backgroundColor: `${props.color(e.key)}`,
          border: `1px solid #fff`,
          borderRadius: `4px`,
        }}
      ></div>
    ))}
  </div>
);
