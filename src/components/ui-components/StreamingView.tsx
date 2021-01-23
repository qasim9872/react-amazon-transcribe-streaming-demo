import React, { useEffect, useMemo, useState } from 'react';
import Button from './helpers/Button';
import TextBox from './helpers/TextBox';

import TranscribeController from '../../controllers/transcribe.controller';
import logger from '../../utils/logger';

const StreamingView: React.FC<{
  componentName: 'StreamingView';
}> = () => {
  const [text, setText] = useState('');
  const [started, setStarted] = useState(false);
  const transcribeController = useMemo(() => new TranscribeController(), []);

  const toggleStarted = () => {
    setStarted(!started);
  };

  useEffect(() => {
    (async () => {
      if (started) {
        logger.info('attempting to start transcription');
        await transcribeController.init();
      } else {
        logger.info('stopping transcription');
      }
    })();
  }, [started, transcribeController]);

  return (
    <div className="flex-grow flex flex-col">
      <TextBox
        name="streaming-result"
        placeholder="Your text will show up here"
        value={text}
      />

      <div className="flex-grow flex flex-row justify-center">
        <Button
          text="Start"
          color="green"
          disabled={started}
          onClick={toggleStarted}
        />
        <Button
          text="Stop"
          color="red"
          disabled={!started}
          onClick={toggleStarted}
        />
      </div>
    </div>
  );
};

export default StreamingView;
