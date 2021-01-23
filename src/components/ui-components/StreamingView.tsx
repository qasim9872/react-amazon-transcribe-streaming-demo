import React, { useState } from 'react';
import Button from './helpers/Button';
import TextBox from './helpers/TextBox';

const StreamingView: React.FC<{
  componentName: 'StreamingView';
}> = () => {
  const [text, setText] = useState('');
  const [started, setStarted] = useState(false);

  return (
    <div className="flex-grow flex flex-col">
      <TextBox
        name="streaming-result"
        placeholder="Your text will show up here"
        value={text}
      />

      <div className="flex-grow flex flex-row justify-center">
        <Button text="Start" color="green" disabled={started} />
        <Button text="Stop" color="red" disabled={!started} />
      </div>
    </div>
  );
};

export default StreamingView;
