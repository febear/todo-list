'use strict';
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'global-require': 0,
    'no-underscore-dangle': 'warn',
    'react/jsx-curly-brace-presence': 'off',
    'no-plusplus': 'warn',
  },
};
