import React, { ComponentProps } from 'react';
import { Fade } from 'react-awesome-reveal';
import useAuthorConfig from '../../hooks/use-author-config';

export const InfoEntry: React.FC<{
  name: string;
  value: string;
}> = ({ name, value }) => {
  return (
    <div>
      {name} {'=>'} {value}
    </div>
  );
};

export const Info: React.FC<{
  componentName?: 'Info';
  socials: {
    email: string;
    github: string;
    twitter: string;
    linkedin: string;
  };
  fadeDirection: ComponentProps<typeof Fade>['direction'];
}> = ({ socials, fadeDirection }) => {
  return (
    <Fade direction={fadeDirection} className="flex-grow flex max-w-1/2">
      <div className="flex-grow flex flex-col bg-gray-300">
        {Object.entries(socials).map(([name, value]) => (
          <InfoEntry key={name} name={name} value={value} />
        ))}
      </div>
    </Fade>
  );
};

const Contact: React.FC<{
  componentName: 'Contact';
}> = () => {
  const author = useAuthorConfig();

  return (
    <div className="flex-grow flex py-8 rounded-full">
      <Info socials={author.socials} fadeDirection="left" />
      <div className="flex-grow flex bg-gray-50">form</div>
    </div>
  );
};

export default Contact;
