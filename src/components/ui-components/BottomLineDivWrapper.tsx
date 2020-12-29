import React, { ComponentProps } from 'react';
import BottomLineDiv from './BottomLineDiv';

const BottomLineDivWrapper: React.FC<{
  componentName: 'BottomLineDivWrapper';
  bottomLineDivConfig: ComponentProps<typeof BottomLineDiv>[];
}> = ({ bottomLineDivConfig }) => {
  return (
    <div className="py-10 flex flex-col lg:flex-row lg:flex-wrap justify-between">
      {bottomLineDivConfig.map((config) => (
        <BottomLineDiv key={config.heading} {...config}>
          {' '}
        </BottomLineDiv>
      ))}
    </div>
  );
};

export default BottomLineDivWrapper;
