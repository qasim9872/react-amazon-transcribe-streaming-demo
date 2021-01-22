import * as React from 'react';
import transcribeConfig from '../constants/transcribe.constants';

export const TranscribeConfigContext = React.createContext(transcribeConfig);

const TranscribeConfigProvider: React.FC = ({ children }) => (
  <TranscribeConfigContext.Provider value={transcribeConfig}>
    {children}
  </TranscribeConfigContext.Provider>
);

export default TranscribeConfigProvider;
