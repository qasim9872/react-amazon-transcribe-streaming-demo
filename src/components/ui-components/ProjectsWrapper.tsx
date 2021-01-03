import React, { ComponentProps } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsWrapper: React.FC<{
  componentName: 'ProjectsWrapper';
  projects: ComponentProps<typeof ProjectCard>[];
}> = ({ projects }) => {
  return (
    <div className="py-10 flex flex-col lg:flex-row lg:flex-wrap">
      {projects.map((config, index) => (
        <ProjectCard key={config.title} index={index} {...config} />
      ))}
    </div>
  );
};

export default ProjectsWrapper;
