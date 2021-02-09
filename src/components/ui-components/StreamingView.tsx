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
  const [recognizedTextArray, setRecognizedTextArray] = useState<string[]>([]);
  const [recognizingText, setRecognizingText] = useState<string>('');
  const [started, setStarted] = useState(false);

  const transcribeController = useMemo(() => new TranscribeController(), []);

  useEffect(() => {
    transcribeController.setConfig(transcribeConfig);

    // if config is being updated, then stop the transcription
    setStarted(false);
  }, [transcribeConfig, transcribeController]);

  useEffect(() => {
    const display = ({ text, final }: { text: string; final: boolean }) => {
      logger.info({ text, final });
      if (final) {
        setRecognizingText('');
        setRecognizedTextArray((prevTextArray) => [...prevTextArray, text]);
      } else {
        setRecognizingText(text);
      }
    };

    transcribeController.on('recognized', display);

    return () => {
      transcribeController.removeListener('recognized', display);
    };
  }, [transcribeController]);

  useEffect(() => {
    (async () => {
      if (started) {
        logger.info('attempting to start transcription');

        // reset state
        setRecognizedTextArray([]);
        setRecognizingText('');

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
        value={[...recognizedTextArray, recognizingText].join(' ')}
      />

      <div className="flex-grow flex flex-row justify-center">
        <Button
          text="Start"
          color="green"
          disabled={started}
          onClick={() => setStarted(true)}
        />
        <Button
          text="Stop"
          color="red"
          disabled={!started}
          onClick={() => setStarted(false)}
        />
      </div>
    </div>
  );
};

export default StreamingView;
