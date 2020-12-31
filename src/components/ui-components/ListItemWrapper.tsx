import React, { ComponentProps, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import AnimateHeight from 'react-animate-height';
import { format } from 'date-fns';
import Arrow from './helpers/Arrow';

const ItemHeader: React.FC<{
  institute: string;
  instituteUrl: string;
  instituteLogo: string;
  courseName: string;
  grade: string;
}> = (props) => {
  return (
    <div className="flex flex-grow items-center">
      <a
        href={props.instituteUrl}
        className="w-auto h-20 mr-4 transition-all ease-in-out duration-500 transform hover:-rotate-45 hover:scale-110"
      >
        <img
          alt={props.institute}
          className="w-auto h-20 mr-4"
          src={props.instituteLogo}
        />
      </a>

      <div className="flex flex-grow flex-col description">
        <div className="flex flex-grow flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold mr-4">{props.courseName}</h1>
          <div className="rounded-full bg-purple-600 text-gray-100 mr-3">
            <span className="font-semibold p-3">{props.grade}</span>
          </div>
        </div>
        <p>{props.institute}</p>
      </div>
    </div>
  );
};

const DateSpan: React.FC<{ date: Date }> = ({ date }) => {
  return <span className="font-bold">{format(date, 'MMMM yy')}</span>;
};

const ItemDescription: React.FC<{
  description: string;
  start: Date;
  end: Date;
  open: boolean;
}> = ({ description, open, start, end }) => {
  return (
    <AnimateHeight height={open ? 'auto' : 0}>
      <div className="p-6 shadow-md w-full flex flex-col bg-gray-100 text-black">
        {/* <hr className="pb-4 border-gray-700" /> */}

        <h2 className="p-4 text-lg">
          The course started in <DateSpan date={start} /> and finished in{' '}
          <DateSpan date={end} />.
        </h2>

        <p className="px-4">{description}</p>
      </div>
    </AnimateHeight>
  );
};

const ListItem: React.FC<{
  componentName: 'ListItem';
  index?: number;
  institute: string;
  instituteUrl: string;
  instituteLogo: string;
  courseName: string;
  description: string;
  start: Date;
  end: Date;
  grade: string;
  fadeDirection: ComponentProps<typeof Fade>['direction'];
}> = ({ index = 0, ...props }) => {
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
        <ItemDescription {...props} open={open} />
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
      {items
        // .sort((skill1, skill2) => skill2.percentage - skill1.percentage)
        .map((config, index) => (
          <ListItem key={config.courseName} index={index} {...config}>
            {' '}
          </ListItem>
        ))}
    </div>
  );
};

export default ListItemWrapper;
