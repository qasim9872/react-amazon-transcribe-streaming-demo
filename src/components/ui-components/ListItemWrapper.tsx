import React, { ComponentProps, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'react-scroll';

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
    <div className="shadow-md bg-gray-800 text-gray-200 my-8 p-6 rounded">
      <div className="flex items-center justify-between">
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
              <h1 className="text-2xl font-semibold mr-4">
                {props.courseName}
              </h1>
              <div className="rounded-full bg-purple-600 text-gray-100 mr-3">
                <span className="font-semibold p-3">{props.grade}</span>
              </div>
            </div>
            <p>{props.institute}</p>
          </div>
        </div>

        <div
          className="ml-4"
          role="button"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          tabIndex={index}
        >
          <div className="flex items-center cursor-pointer px-3 py-2 text-gray-200 hover:text-gray-600">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* collapsible div */}
      {open && (
        <div className="w-full flex flex-col mt-8">
          <hr className="mb-4 border-gray-700" />
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
};

const ListItemWrapper: React.FC<{
  componentName: 'ListItemWrapper';
  fadeDirection: ComponentProps<typeof Fade>['direction'];
  items: ComponentProps<typeof ListItem>[];
}> = ({ fadeDirection, items }) => {
  return (
    <Fade direction={fadeDirection}>
      <div className="justify-center">
        {items
          // .sort((skill1, skill2) => skill2.percentage - skill1.percentage)
          .map((config, index) => (
            <ListItem key={config.courseName} index={index} {...config}>
              {' '}
            </ListItem>
          ))}
      </div>
    </Fade>
  );
};

export default ListItemWrapper;
