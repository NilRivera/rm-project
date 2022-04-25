module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'implicit-arrow-linebreak': [
      0,
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'function-paren-newline': [0, 'never'],
  },
};
