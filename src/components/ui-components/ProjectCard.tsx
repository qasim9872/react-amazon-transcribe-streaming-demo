import React, { ComponentProps } from 'react';
import { Fade } from 'react-awesome-reveal';

const ProjectCard: React.FC<{
  index?: number;
  componentName: 'ProjectCard';
  title: string;
  color: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  fadeDirection?: ComponentProps<typeof Fade>['direction'];
}> = ({
  index,
  title,
  link,
  image,
  description,
  tags,
  fadeDirection = 'left',
}) => {
  return (
    <Fade direction={fadeDirection} className="p-4 lg:w-1/3" duration={1000}>
      <div
        role="button"
        tabIndex={index}
        onClick={(e) => {
          e.preventDefault();
          window.open(link, '_blank');
        }}
        onKeyDown={(e) => {
          e.preventDefault();
          window.open(link, '_blank');
        }}
        className="group transform transition-all duration-500 ease-in-out hover:scale-110 bg-white rounded-lg shadow flex flex-col"
      >
        <img
          className="w-full rounded-lg object-cover object-center"
          src={image}
          alt={title}
        />

        <div className="p-4 h-auto flex-grow flex flex-col justify-between">
          <div>
            <h1 className="block transition-all duration-500 ease-in-out text-blue-400 group-hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              {title}
            </h1>

            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              {description}
            </div>
          </div>

          <div className="flex mt-8">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-300 py-1 px-2 mr-2 rounded-full text-xs lowercase text-gray-700"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
