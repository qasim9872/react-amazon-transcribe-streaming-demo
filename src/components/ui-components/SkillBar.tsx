import React, { ComponentProps } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const SkillWrapper: React.FC<{
  componentName: 'SkillBar';
  name: string;
  color: string;
  percentage: number;
  fadeDirection?: ComponentProps<typeof Fade>['direction'];
}> = ({ name, color, percentage, fadeDirection = 'left' }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    inView && setValue(percentage);
  }, [percentage, inView]);

  return (
    <Fade
      triggerOnce={true}
      direction={fadeDirection}
      className="group flex flex-col lg:w-1/2 pr-5 pb-5"
      duration={1000}
    >
      <div ref={ref}>
        <span
          className={`transition-all duration-500 ease-in-out group-hover:text-${color}-400 group-hover:text-lg`}
        >
          {name}
        </span>
        <div className="my-2 w-full rounded bg-gray-300 h-6px relative">
          <div
            className={[
              `h-6px rounded bg-${color}-400 relative`,
              'delay-1000 transition-all duration-500 ease-in-out',
              'after:empty-content after:right-0 after:-top-2px after:absolute',
              `after:h-10px after:w-10px after:rounded-50Percent after:bg-${color}-400`,
            ].join(' ')}
            style={{
              width: `${value}%`,
            }}
          >
            <span
              className={`absolute right-0 -top-22px text-xs text-${color}-400`}
            >
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SkillWrapper;
