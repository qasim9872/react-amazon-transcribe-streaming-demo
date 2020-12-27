import React from 'react';

import { Wrapper } from '../../interfaces/Wrapper';
import Basic from './basic';

const WrapperMap = {
  basic: Basic,
};

function isWrapper(details: unknown): details is Wrapper {
  return !!(details as { wrap?: string }).wrap;
}

function wrapLayout(details: unknown, layout: JSX.Element) {
  if (isWrapper(details)) {
    const Wrap = WrapperMap[details.wrap];
    switch (details.wrap) {
      case 'basic':
        return (
          <Wrap
            wrap={details.wrap}
            title={details.title}
            header={details.header}
          >
            {layout}
          </Wrap>
        );
      default:
        throw new Error('invalid type');
    }
  } else {
    throw new Error('Unable to verify wrapper type');
  }
}

export default wrapLayout;
