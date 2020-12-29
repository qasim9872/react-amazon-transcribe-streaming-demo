import React, { ComponentProps } from 'react';
import { Fade } from 'react-awesome-reveal';

const BottomLineDiv: React.FC<{
  componentName: 'BottomLineDiv';
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  text: string;
  color: string;
  fadeDirection: ComponentProps<typeof Fade>['direction'];
}> = ({ Icon, text, color, fadeDirection }) => {
  return (
    // TODO - account for position when inside flex
    <Fade
      triggerOnce={true}
      direction={fadeDirection}
      className="flex-grow mx-1 my-3"
    >
      <div
        className={[
          'flex flex-col font-bold rounded border-b-2 shadow-2xl pt-2 pb-12 px-8',
          `transition duration-500 ease-in-out hover:border-${color}-800`,
          'hover:transform hover:-translate-y-4',
          `text-gray-800 bg-gray-50 border-${color}-600 `,
        ].join(' ')}
      >
        <div className={`w-8 h-8 py-4 mr-2 fill-current text-${color}-600`}>
          <Icon />
        </div>
        <span className="mr-2 mt-8 capitalize">{text}</span>
      </div>
    </Fade>
  );
};

export default BottomLineDiv;
