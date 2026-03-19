const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importHelpersPlugin = require('eslint-plugin-import-helpers');
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
      'import-helpers': importHelpersPlugin,
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
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            ['/^react/', '/^next/', '/@next/'],
            '/module/',
            ['/^@/pages/', '/@pages/', '/^pages/'],
            ['/^@/templates/', '/@templates/', '/^templates/'],
            ['/^@/components/', '/@components/', '/^components/'],
            ['/^@/contexts/', '/@contexts/', '/^contexts/'],
            ['/^@/hooks/', '/@hooks/', '/^hooks/'],
            ['/^@/services/', '/@services/', '/^services/'],
            ['/^@/functions/', '/@functions/', '/^functions/'],
            ['/^@/utils/', '/@utils/', '/^utils/'],
            ['/^@/styles/', '/@styles/', '/^styles/'],
            ['/^@/shared/', '/@shared/', '/^shared/'],
            '/absolute/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
    },
  },
];
