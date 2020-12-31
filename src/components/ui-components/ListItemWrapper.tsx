import React, { ComponentProps, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import AnimateHeight from 'react-animate-height';
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
      <a href={props.instituteUrl} className="w-auto h-20 mr-4">
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

const ItemDescription: React.FC<{
  description: string;
  open: boolean;
}> = ({ description, open }) => {
  return (
    <AnimateHeight height={open ? 'auto' : 0}>
      <div className="pt-8 transition-all ease-in-out duration-500 w-full flex flex-col">
        <hr className="pb-4 border-gray-700" />
        <p>{description}</p>
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
}> = ({ index = 0, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="transition-all ease-in-out duration-500 shadow-md bg-gray-800 text-gray-200 my-8 p-6 rounded">
      <div className="flex items-center justify-between">
        <ItemHeader {...props} />

        <div
          className="ml-4"
          role="button"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          tabIndex={index}
        >
          <Arrow open={open} />
        </div>
      </div>

      {/* collapsible div */}
      <ItemDescription description={props.description} open={open} />
    </li>
  );
};

const ListItemWrapper: React.FC<{
  componentName: 'ListItemWrapper';
  fadeDirection: ComponentProps<typeof Fade>['direction'];
  items: ComponentProps<typeof ListItem>[];
}> = ({ fadeDirection, items }) => {
  return (
    <Fade direction={fadeDirection}>
      <ul className="justify-center">
        {items
          // .sort((skill1, skill2) => skill2.percentage - skill1.percentage)
          .map((config, index) => (
            <ListItem key={config.courseName} index={index} {...config}>
              {' '}
            </ListItem>
          ))}
      </ul>
    </Fade>
  );
};

export default ListItemWrapper;
