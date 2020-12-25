import React from 'react';
import { BlankSection } from '../../interfaces/Section';
import { mapRoute } from '../../utils/helpers';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Blank: React.FC<BlankSection> = (details) => {
  return (
    <div
      key={details.text}
      id={mapRoute(details.text)}
      className="min-h-screen"
      style={{ backgroundColor: getRandomColor() }}
    >
      {' '}
      {Array(500).fill(details.text).join(' ')}{' '}
    </div>
  );
};

export default Blank;
