import React, { useState } from 'react';
import TextBox from './TextBox';

const StreamingView: React.FC<{
  componentName: 'StreamingView';
}> = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex-grow flex flex-col">
      <TextBox
        componentName="TextBox"
        name="streaming-result"
        placeholder="Your text will show up here"
        value={text}
      />
    </div>
  );
};

export default StreamingView;
