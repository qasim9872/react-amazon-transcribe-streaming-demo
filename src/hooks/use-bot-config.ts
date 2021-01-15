import * as React from 'react';

import { BotConfigContext } from '../store/bot-config';

const useBotConfig = () => {
  return React.useContext(BotConfigContext);
};

export default useBotConfig;
