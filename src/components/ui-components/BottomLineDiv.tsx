import React, { ComponentProps } from 'react';
import { Fade } from 'react-awesome-reveal';

import icons, { IconName } from '../svg/icons';
import IconWrapper from './helpers/IconWrapper';

const BottomLineDiv: React.FC<{
  componentName: 'BottomLineDiv';
  icon: IconName;
  heading: string;
  color: string;
  fadeDirection: ComponentProps<typeof Fade>['direction'];
}> = ({ icon, heading, color, fadeDirection }) => {
  const Icon = icons[icon];

  return (
    // TODO - account for position when inside flex
    <Fade direction={fadeDirection} className="flex-grow mx-1 my-3">
      <div
        className={[
          'flex flex-col font-bold rounded border-b-2 shadow-2xl pt-2 pb-12 px-8',
          `transition duration-500 ease-in-out hover:border-${color}-800`,
          'transform hover:-translate-y-4',
          `text-gray-800 bg-gray-50 border-${color}-600 `,
        ].join(' ')}
      >
        <IconWrapper className={`text-${color}-600`}>
          <Icon />
        </IconWrapper>

        <span className="mr-2 mt-8 capitalize">{heading}</span>
      </div>
    </Fade>
  );
};

export default BottomLineDiv;
