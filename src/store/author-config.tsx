import * as React from 'react';
import authorConfig from '../constants/author.constants';

export const AuthorConfigContext = React.createContext(authorConfig);

const AuthorConfigProvider: React.FC = ({ children }) => (
  <AuthorConfigContext.Provider value={authorConfig}>
    {children}
  </AuthorConfigContext.Provider>
);

export default AuthorConfigProvider;
