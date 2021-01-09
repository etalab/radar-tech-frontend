import React from 'react';

const HTMLBarChart = props => (
  <div
    style={{
      display: `flex`,
      flexDirection: `row`,
      marginBottom: `50px`,
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
      >
        <span
          style={{
            color: `${props.color(e.key)}`,
            transform: `translate(0,20px)`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          {e.pct}%
        </span>
      </div>
    ))}
  </div>
);

export default HTMLBarChart;
