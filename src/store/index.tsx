import React from 'react';
import TranscribeConfigProvider from './transcribe-config';
import SiteConfigProvider from './site-config';

export const StoreProviders: React.FC = (props) => {
  const { children } = props;
  return (
    <SiteConfigProvider>
      <TranscribeConfigProvider>{children}</TranscribeConfigProvider>
    </SiteConfigProvider>
  );
};

export default StoreProviders;
