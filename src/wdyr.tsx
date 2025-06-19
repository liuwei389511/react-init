/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react';

// For react-native you might want to use
// the __DEV__ flag instead of process.env.NODE_ENV === 'development'
if (process.env.NODE_ENV === 'development') {
  //eslint-disable-next-line
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
    trackHooks: true,
    trackAllPureComponents: true,
  });
}
