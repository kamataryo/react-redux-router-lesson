module.exports = {
  'env': {
    'browser'  : true,
    'commonjs' : true,
    'es6'      : true,
    'node'     : true
  },
  'plugins': [
    'import',
    'react'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  }
}
