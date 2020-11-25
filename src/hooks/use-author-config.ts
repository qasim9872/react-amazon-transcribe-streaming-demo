import * as React from 'react';

import { AuthorConfigContext } from '../store/author-config';

const useAuthorConfig = () => {
  return React.useContext(AuthorConfigContext);
};

export default useAuthorConfig;
