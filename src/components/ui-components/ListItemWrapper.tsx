import React, { ComponentProps, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const ListItemDetails: React.FC<{
  open: boolean;
  institute: string;
  description: string;
  start: Date;
  end: Date;
  grade: string;
}> = ({ open, description }) => {
  return (
    <div
      className={`border-gray-200 border transition-all ease-in-out duration-500 ${
        open ? '' : 'h-0 hidden'
      }`}
    >
      {description}
    </div>
  );
};

const ListItem: React.FC<{
  componentName: 'ListItem';
  index?: number;
  institute: string;
  courseName: string;
  description: string;
  start: Date;
  end: Date;
  grade: string;
}> = ({ courseName, index = 0, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cursor-pointer flex flex-col mx-1 transition-all ease-in-out duration-500">
      <div
        role="button"
        className={`p-4 my-3 border-gray-200 shadow-xl border ${
          open ? 'bg-blue-400 text-white' : 'bg-gray-100 hover:bg-blue-200'
        }`}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        tabIndex={index}
      >
        {courseName}
      </div>
      <ListItemDetails open={open} {...props} />
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
