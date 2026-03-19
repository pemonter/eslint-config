const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...reactPlugin.configs.flat.recommended,
  eslintConfigPrettier,
  prettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
        jsxPragma: null,
        runtime: 'automatic',
      },
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
      },
    },
    rules: {
      'prettier/prettier': ['error', {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: true,
        endOfLine: 'auto',
      }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // react / next
            ['^react($|/)', '^@react', '^next($|/)', '^@next/'],
            // external npm packages
            ['^[^.@]', '^@[^/]'],
            // pages
            ['^@/pages', '^pages/'],
            // templates
            ['^@/templates', '^templates/'],
            // components
            ['^@/components', '^components/'],
            // contexts
            ['^@/contexts', '^contexts/'],
            // hooks
            ['^@/hooks', '^hooks/'],
            // services
            ['^@/services', '^services/'],
            // functions
            ['^@/functions', '^functions/'],
            // utils
            ['^@/utils', '^utils/'],
            // styles
            ['^@/styles', '^styles/'],
            // shared
            ['^@/shared', '^shared/'],
            // other absolute / alias paths
            ['^@/'],
            // relative
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
    },
  },
];
