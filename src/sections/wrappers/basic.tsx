import React from 'react';
import { motion } from 'framer-motion';
import { BasicWrapper } from '../../interfaces/Wrapper';

const variants: { [key: string]: object } = {
  fromLeft: {
    x: -1000,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Basic: React.FC<BasicWrapper> = ({
  children,
  header,
  title,
  animation,
}) => {
  return (
    <motion.div
      className="px-10 py-28 flex flex-col"
      initial={animation && variants[animation.initial]}
      animate={animation && variants[animation.animate]}
      transition={{ duration: 1000 }}
    >
      <div className="flex flex-col justify-around uppercase max-w-1/2">
        <span className="text-xs pb-4 text-gray-400 tracking-5px">
          {header}
        </span>
        <span className="text-xl font-bold tracking-5px">{title}</span>
      </div>
      <div className="mt-16">{children}</div>
    </motion.div>
  );
};

export default Basic;
