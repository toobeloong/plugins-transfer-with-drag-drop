module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    location: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 'off',
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'object-curly-newline': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
    'object-shorthand': 'off',
    camelcase: 'off',
    'space-before-function-paren': 'off',
    'func-names': 'off',
    'prefer-const': 'off',
    quotes: 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'prefer-destructuring': 'off',
    'prefer-arrow-callback': 'off',
    'no-param-reassign': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
