import React, { ComponentProps, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import AnimateHeight from 'react-animate-height';
import { format } from 'date-fns';
import Arrow from './helpers/Arrow';

const ItemHeader: React.FC<{
  title: string;
  subtitle: string;
  link: string;
  logo: string;
  badgeText?: string;
}> = (props) => {
  return (
    <div className="flex flex-grow items-center">
      <a
        href={props.link}
        className="w-auto h-20 mr-4 transition-all ease-in-out duration-500 transform hover:-rotate-45 hover:scale-110"
      >
        <img alt={props.title} className="w-auto h-20 mr-4" src={props.logo} />
      </a>

      <div className="flex flex-grow flex-col description">
        <div className="flex flex-grow flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold mr-4">{props.title}</h1>
          {props.badgeText && (
            <div className="rounded-full bg-purple-600 text-gray-100 mr-3">
              <span className="font-semibold p-3">{props.badgeText}</span>
            </div>
          )}
        </div>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

const DateSpan: React.FC<{ date: Date }> = ({ date }) => {
  return <span className="font-bold">{format(date, 'MMMM yy')}</span>;
};

const ItemDescription: React.FC<{
  description?: string;
  points?: string[];
  start?: Date;
  end?: Date;
  open: boolean;
}> = ({ description, points, open, start, end }) => {
  return (
    <AnimateHeight height={open ? 'auto' : 0}>
      <div className="p-6 shadow-md w-full flex flex-col bg-gray-100 text-black">
        {start && end && (
          <h2 className="p-4 text-lg">
            The course started in <DateSpan date={start} /> and finished in{' '}
            <DateSpan date={end} />.
          </h2>
        )}

        <div className="px-4">
          {description && <p>{description}</p>}
          {points && points.length > 0 && (
            <ul className="list-disc list-inside">
              {points.map((point) => (
                <li key={point}> {point} </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AnimateHeight>
  );
};

const ListItem: React.FC<{
  componentName: 'ListItem';
  index?: number;
  title: string;
  subtitle: string;
  logo: string;
  link: string;
  description?: string;
  points?: string[];
  badgeText?: string;
  start?: Date;
  end?: Date;
  fadeDirection: ComponentProps<typeof Fade>['direction'];
}> = ({ index = 0, points = [], ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fade direction={props.fadeDirection}>
      <div
        className={`transition-all ease-in-out duration-500 shadow-md my-8 rounded ${
          open
            ? 'bg-blue-400 text-white'
            : 'bg-gray-100 text-black hover:bg-blue-200'
        }`}
      >
        <div
          role="button"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          tabIndex={index}
          className="p-6 flex items-center justify-between"
        >
          <ItemHeader {...props} />

          <div className="ml-4">
            <Arrow open={open} />
          </div>
        </div>

        {/* collapsible div */}
        <ItemDescription {...props} points={points} open={open} />
      </div>
    </Fade>
  );
};

const ListItemWrapper: React.FC<{
  componentName: 'ListItemWrapper';

  items: ComponentProps<typeof ListItem>[];
}> = ({ items }) => {
  return (
    <div className="justify-center">
      {items.map((config, index) => (
        <ListItem key={config.title} index={index} {...config}>
          {' '}
        </ListItem>
      ))}
    </div>
  );
};

export default ListItemWrapper;
