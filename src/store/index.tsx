import React from 'react';
import BotConfigProvider from './bot-config';

export const StoreProviders: React.FC = (props) => {
  const { children } = props;
  return <BotConfigProvider>{children}</BotConfigProvider>;
};

export default StoreProviders;
