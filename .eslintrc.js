module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'no-restricted-globals': 0,
    'react/prop-types': 0,
    'prettier/prettier': 2,
    'no-param-reassign': 0,
    'global-require': 0,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  globals: {
    document: true,
    window: true,
  },
  env: {
    browser: true,
  },
};
