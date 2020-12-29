import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useAuthorConfig from '../../hooks/use-author-config';

const Paragraph: React.FC<{ text: string }> = ({ text }) => {
  return <p className="py-2">{text}</p>;
};

const About: React.FC<{
  componentName: 'AboutText';
  textOrTextArray: string[] | string;
  updateInterval?: number;
  increment?: number;
}> = ({ textOrTextArray, updateInterval = 10, increment = 1 }) => {
  const author = useAuthorConfig();

  const textArray = Array.isArray(textOrTextArray)
    ? textOrTextArray
    : [textOrTextArray];

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [completedTextArray, setCompletedTextArray] = useState<string[]>([]);

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!inView) {
        return;
      }

      if (!(textArrayIndex < textArray.length)) {
        clearInterval(interval);
        return;
      }

      // get current text from textArray
      const displayingText = textArray[textArrayIndex];

      // update displayText
      const newDisplayText = displayingText.substring(0, textIndex);
      setDisplayText(newDisplayText);

      if (textIndex + increment < displayingText.length) {
        setTextIndex(textIndex + increment);
      } else {
        setTextIndex(0);
        setTextArrayIndex(textArrayIndex + 1);

        if (textArrayIndex !== textArray.length - 1) {
          setCompletedTextArray([...completedTextArray, displayingText]);
        }
      }
    }, updateInterval);

    return () => clearInterval(interval);
  });

  return (
    <div ref={ref}>
      <p className="py-2">
        I am
        <span className="font-bold capitalize"> {author.name}</span>, and I am a
        <span className="font-bold capitalize"> {author.jobTitle}</span>
      </p>

      {completedTextArray.map((text) => (
        <Paragraph key={text} text={text} />
      ))}

      {!!displayText && <Paragraph text={displayText} />}
    </div>
  );
};

export default About;
