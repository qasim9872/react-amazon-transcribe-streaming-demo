import React from 'react';

const BottomLineDiv: React.FC<{
  componentName: 'BottomLineDiv';
}> = () => {
  return (
    <div className="m-3">
      <button
        type="button"
        className="text-gray-800 font-bold rounded border-b-2 border-blue-400 hover:border-blue-400 hover:bg-blue-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
      >
        <span className="mr-2">hello there</span>
      </button>
    </div>
  );
};

export default BottomLineDiv;
