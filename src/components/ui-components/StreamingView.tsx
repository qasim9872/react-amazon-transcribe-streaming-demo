import React, { useEffect, useMemo, useState } from 'react';
import Button from './helpers/Button';
import TextBox from './helpers/TextBox';

import TranscribeController from '../../controllers/transcribe.controller';
import logger from '../../utils/logger';
import useTranscribeConfig from '../../hooks/use-transcribe-config';

const StreamingView: React.FC<{
  componentName: 'StreamingView';
}> = () => {
  const [transcribeConfig] = useTranscribeConfig();

  const [textArray, setTextArray] = useState<string[]>([]);

  const [started, setStarted] = useState(false);
  const transcribeController = useMemo(() => new TranscribeController(), []);
  const displayText = useMemo(
    () => (recognized: string, final: boolean) => {
      logger.info({ recognized, final });
      setTextArray([...textArray, recognized]);
    },
    [textArray],
  );

  const toggleStarted = () => setStarted(!started);

  useEffect(() => {
    transcribeController.setConfig(transcribeConfig);
    transcribeController.setCallback(displayText);

    // if config is being updated, then stop the transcription
    setStarted(false);
  }, [displayText, transcribeConfig, transcribeController]);

  useEffect(() => {
    (async () => {
      if (started) {
        logger.info('attempting to start transcription');
        await transcribeController.init().catch((error: Error) => {
          logger.error(error);
          setStarted(false);
        });
      } else {
        logger.info('stopping transcription');
        await transcribeController.stop();
      }
    })();
  }, [started, transcribeController]);

  return (
    <div className="flex-grow flex flex-col">
      <TextBox
        name="streaming-result"
        placeholder="Your text will show up here"
        value={textArray.join()}
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
