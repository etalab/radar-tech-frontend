import React from 'react';
import * as format from 'd3-format';
import * as md5 from 'md5';

const d3 = { ...format };

const config = {
  cell: { width: 10, height: 70 },
  person: { width: 10, height: 80 },
};

export type Person = { id: string; avatar: string; highlight: string };

// Generate a random-ish person based on the seed
// https://observablehq.com/@elibryan/covid-19-test-accuracy-simulator
const generatePerson = (seed: { id: number; color: string }): Person => {
  const avatarChoices = 'abcdefghijklmnopqrstuABCDEEFGHIJKLMNOPQRSTUVWXYZ';
  const id = 'person_' + d3.format('0>4')(seed.id);
  // Choose a letter for the avatar based on a hash of the ID
  const avatar =
    avatarChoices[parseInt(md5(id).slice(0, 2), 16) % avatarChoices.length];
  return {
    id,
    avatar,
    highlight: seed.color,
  };
};

interface WeePersonProps {
  p: Person;
}

// Render a person as a weepeople character
// https://observablehq.com/@elibryan/covid-19-test-accuracy-simulator
const WeePerson = ({ p }: WeePersonProps) => {
  const personDims = config.person;
  const { highlight } = p;
  const strokeColor = '#fff';

  // Render the stroke and body separately for cleaner outline
  return (
    <g className="person">
      <text
        baselineShift={`-${personDims.height}px`}
        style={{
          fontSize: `${personDims.height}px`,
          fontFamily: `WeePeople`,
        }}
        fill={highlight}
        stroke={strokeColor}
        strokeWidth="3"
      >
        {p.avatar}
      </text>

      <text
        baselineShift={`-${personDims.height}px`}
        style={{
          fontSize: `${personDims.height}px`,
          fontFamily: `WeePeople`,
        }}
        fill={highlight}
      >
        {p.avatar}
      </text>
    </g>
  );
};
export { WeePerson, generatePerson };
