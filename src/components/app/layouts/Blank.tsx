import React from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Blank: React.FC<{
  id: string;
  layoutName: 'Blank';
}> = (details) => {
  return (
    <div style={{ backgroundColor: getRandomColor() }}>
      {' '}
      {Array(500).fill(details.id).join(' ')}{' '}
    </div>
  );
};

export default Blank;
