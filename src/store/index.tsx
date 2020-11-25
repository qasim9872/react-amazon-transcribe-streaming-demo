import React from 'react';
import AuthorConfigProvider from './author-config';
import SiteConfigProvider from './site-config';

export const StoreProviders: React.FC = (props) => {
  const { children } = props;
  return (
    <AuthorConfigProvider>
      <SiteConfigProvider>{children}</SiteConfigProvider>
    </AuthorConfigProvider>
  );
};

export default StoreProviders;
