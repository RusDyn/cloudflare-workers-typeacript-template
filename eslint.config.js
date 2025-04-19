import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

// Create compat instance
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

// Get environments
const envs = compat.env({
  browser: true,
  es2021: true,
  node: true,
});

// Load TypeScript plugin
const tseslint = compat.extends(
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
);

export default [
  js.configs.recommended,
  ...envs,
  ...tseslint,
  {
    ignores: ['dist/**', 'node_modules/**', '**/*.toml'],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.js', 'test/**/*.ts', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // General ESLint rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-arrow-callback': 'error',
      'no-duplicate-imports': 'error',
      'no-param-reassign': 'error',
      'no-return-await': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-use-before-define': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-nested-ternary': 'error',
      'no-new-wrappers': 'error',
      'no-new-object': 'error',
      'no-new-func': 'error',
      'no-loop-func': 'error',
      'no-lonely-if': 'error',
      'no-labels': 'error',
      'no-iterator': 'error',
      'no-implied-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-eval': 'error',
      'no-eq-null': 'error',
      'no-div-regex': 'error',
      'no-caller': 'error',
      'no-bitwise': 'error',
      eqeqeq: 'error',
      'dot-notation': 'error',
      curly: 'error',
      camelcase: 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'array-callback-return': 'error',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  prettierConfig,
];
