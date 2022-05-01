module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['simple-import-sort', 'unused-imports', 'prettier'],
  rules: {
    'import/no-cycle': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'unused-imports/no-unused-imports-ts': 2,
    'react/jsx-curly-brace-presence': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^@?\\w'], ['^[A-Z].*'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like', 'cjs-export', 'class', 'const', 'export', 'import', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'cjs-export', 'class', 'const', 'export', 'import', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
