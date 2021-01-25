import React, { useRef } from 'react';
import HTMLBarChart from './HTMLBarChart.js';
import { calculateChartDimensions } from './utils/use-dimensions';
import './css/weepeople.css';
import { WeePerson, generatePerson } from '../components/WeePerson.js';

import * as scale from 'd3-scale';
import * as array from 'd3-array';
import * as scaleChromatic from 'd3-scale-chromatic';

const d3 = { ...scale, ...array, ...scaleChromatic };

const chartSettings = {
  marginLeft: 1,
  marginRight: 0,
  marginBottom: 10,
  marginTop: 100,
};

const WeePeopleBar = props => {
  const { data } = props;
  let ref = useRef();
  let dimensions;
  [ref, dimensions] = calculateChartDimensions(chartSettings, ref);

  // rampe de couleurs, catégorique en l'espèce
  const color = d3
    .scaleOrdinal()
    .domain(data.map(e => e.key))
    //.range(d3.schemeSet2);
    .range(['#5770be', '#ff6f4c', '#00ac8c', '#ff9940']);

  const config = {
    cell: { width: 10, height: 70 },
    person: { width: 10, height: 80 },
  };
  const persPerLine = Math.floor(dimensions.width / config.cell.width) - 3;

  // on fait attention à ne pas utiliser trop vite `data` et `persPerLine`,
  // qui dépendent de petites choses calculées au rendu
  let new_people = [];
  if (data.length > 0 && persPerLine > 1) {
    new_people = data
      .map(e =>
        new Array(Math.round((persPerLine * e.pct) / 100)).fill({
          color: color(e.key),
        })
      )
      .flat()
      .map((e, i) => ({ id: i, ...e }))
      .map(generatePerson);
  }

  return (
    <div
      className="Chart__wrapper"
      ref={ref}
      style={{ height: '250px', marginTop: `20px` }}
    >
      <svg width={dimensions.width} height={dimensions.boundedHeight}>
        <g
          transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}
        >
          {new_people.map((p, i) => (
            <g key={i} transform={`translate(${i * config.cell.width},0)`}>
              <WeePerson p={p} />
            </g>
          ))}
        </g>
      </svg>
      <HTMLBarChart data={data} color={color} />
    </div>
  );
};

export default WeePeopleBar;
