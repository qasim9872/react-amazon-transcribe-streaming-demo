import * as React from 'react';
import botConfig from '../constants/bot.constants';

export const BotConfigContext = React.createContext(botConfig);

const BotConfigProvider: React.FC = ({ children }) => (
  <BotConfigContext.Provider value={botConfig}>
    {children}
  </BotConfigContext.Provider>
);

export default BotConfigProvider;
