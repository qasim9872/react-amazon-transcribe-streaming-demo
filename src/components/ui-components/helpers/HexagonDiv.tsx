import React from 'react';

type Svg = React.SVGProps<SVGSVGElement> & { className: string };

const HexagonDiv: React.FC<{
  color: string;
  Icon: React.FC<Svg>;
}> = ({ Icon, color }) => {
  return (
    <svg
      className={`w-24 h-24 py-4 mr-2 fill-current text-${color}-600`}
      width="auto"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ fill: '#010002;' }}
    >
      <g style={{ fill: '#010002;' }}>
        <g style={{ fill: '#010002;' }}>
          <path
            style={{ fill: '#010002;' }}
            d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
			c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408c1.835,0,3.648-0.469,5.291-1.408l224-128
			c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z M469.333,367.147L256,489.045
			L42.667,367.147V144.853L256,22.955l213.333,121.899V367.147z"
          />
        </g>
      </g>
      <Icon className="w-16 h-16 py-4 mr-2 fill-current text-white" />
      <div />
    </svg>
  );
};

export default HexagonDiv;
