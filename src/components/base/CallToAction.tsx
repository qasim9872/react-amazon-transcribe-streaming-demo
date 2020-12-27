import React from 'react';

import { CallToAction } from '../../interfaces/Section';

const CallToActionElem: React.FC<{
  link: string;
  text: string;
  icon: JSX.Element;
}> = ({ link, text, icon }) => {
  return (
    <div className="m-3">
      <button
        type="button"
        className="text-gray-800 font-bold rounded border-b-2 border-blue-400 hover:border-blue-400 hover:bg-blue-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
        onClick={(e) => {
          e.preventDefault();
          window.open(link, '_blank');
        }}
      >
        <span className="mr-2">{text}</span>
        {icon}
      </button>
    </div>
  );
};

export default CallToActionElem;
