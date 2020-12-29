import * as React from 'react';
import siteConfig from '../constants/site';

export const SiteConfigContext = React.createContext(siteConfig);

const SiteConfigProvider: React.FC = ({ children }) => (
  <SiteConfigContext.Provider value={siteConfig}>
    {children}
  </SiteConfigContext.Provider>
);

export default SiteConfigProvider;
