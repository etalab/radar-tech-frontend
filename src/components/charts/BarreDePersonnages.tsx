import React from 'react';
import { useDims } from 'react-dims';
import { WeePerson, generatePerson, Person } from './WeePerson';
import '../css/weepeople.css';

import * as scale from 'd3-scale';
import * as scaleChromatic from 'd3-scale-chromatic';
const d3 = { ...scale, ...scaleChromatic };

interface BarreDePersonnagesProps {
  data: { key: string; value: number }[];
  height: number;
}

export const BarreDePersonnages = ({
  data,
  height,
}: BarreDePersonnagesProps) => {
  const [wrapperRef, dimensions] = useDims();
  const { width } = dimensions;

  const config = {
    cell: { width: 10, height: 70 },
    person: { width: 10, height: 80 },
  };
  const persPerLine = Math.floor(width / config.cell.width) - 3;

  // rampe de couleurs, catégorique en l'espèce
  const color = d3
    .scaleOrdinal()
    .domain(data.map(e => e.key))
    //.range(d3.schemeSet2);
    .range(['#5770be', '#ff6f4c', '#00ac8c', '#ff9940']);

  // on fait attention à ne pas utiliser trop vite `data` et `persPerLine`,
  // qui dépendent de petites choses calculées au rendu
  let new_people: [] | Person[] = [];
  if (data.length > 0 && persPerLine > 1) {
    new_people = data
      .map(e =>
        new Array(Math.round((persPerLine * e.value) / 100)).fill({
          color: color(e.key),
        })
      )
      .flat()
      .map((e, i) => ({ id: i, ...e }))
      .map(generatePerson);
  }

  return (
    <svg
      ref={wrapperRef}
      width={'100%'}
      height={height}
      style={{ border: '1px dashed #ddd' }}
    >
      <g transform={`translate(10,${height / 2 + config.cell.height / 2})`}>
        {new_people &&
          new_people.map((p: Person, i: number) => (
            <g key={i} transform={`translate(${i * config.cell.width},0)`}>
              <WeePerson p={p} />
            </g>
          ))}
      </g>
    </svg>
  );
};
