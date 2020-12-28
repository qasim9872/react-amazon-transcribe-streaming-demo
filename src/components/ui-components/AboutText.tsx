import React from 'react';
import useAuthorConfig from '../../hooks/use-author-config';

const About: React.FC<{
  name: 'AboutText';
  textOrTextArray: string[] | string;
}> = ({ textOrTextArray }) => {
  const author = useAuthorConfig();

  const textArray = Array.isArray(textOrTextArray)
    ? textOrTextArray
    : [textOrTextArray];

  return (
    <div>
      <p className="py-2">
        I am
        <span className="font-bold capitalize"> {author.name}</span>, and I am a
        <span className="font-bold capitalize"> {author.jobTitle}</span>
      </p>

      {textArray.map((text) => (
        <p key={text} className="py-2">
          {text}
        </p>
      ))}
    </div>
  );
};

export default About;
