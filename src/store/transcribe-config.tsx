/* eslint-disable @typescript-eslint/indent */
import * as React from 'react';
import transcribeConfig from '../constants/transcribe.constants';

type TranscribeContext = [
  typeof transcribeConfig,
  React.Dispatch<React.SetStateAction<typeof transcribeConfig>> | (() => {}),
];

export const TranscribeConfigContext = React.createContext<TranscribeContext>([
  transcribeConfig,
  () => {},
]);

const TranscribeConfigProvider: React.FC<{}> = ({ children }) => {
  const transcribeConfigHook = React.useState(transcribeConfig);

  return (
    <TranscribeConfigContext.Provider value={transcribeConfigHook}>
      {children}
    </TranscribeConfigContext.Provider>
  );
};

export default TranscribeConfigProvider;
