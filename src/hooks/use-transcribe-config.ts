import * as React from 'react';

import { TranscribeConfigContext } from '../store/transcribe-config';

const useTranscribeConfig = () => {
  return React.useContext(TranscribeConfigContext);
};

export default useTranscribeConfig;
