const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const tseslint = require('typescript-eslint');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');
const neostandard = require('neostandard');

module.exports = [
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs['recommended-latest'],
  ...tseslint.configs.recommended,
  ...neostandard({ noStyle: true }),
  eslintConfigPrettier,
  prettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        React: 'readonly'
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
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
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react', '^@react', '^@/react'],
            ['^next', '^@next/'],
            ['^expo', '^@expo/'],
            ['^[^.@]', '^@[^/]'],
            ['^@/pages', '^pages/', '^@/screens', '^screens/'],
            ['^@/templates', '^templates/'],
            ['^@/components', '^components/'],
            ['^@/contexts', '^contexts/'],
            ['^@/hooks', '^hooks/'],
            ['^@/modules', '^modules/'],
            ['^@/routes', '^routes/'],
            ['^@/services', '^services/'],
            ['^@/storage', '^storage/'],
            ['^@/stores', '^stores/'],
            [
              '^@/constants', '^constants/',
              '^@/functions', '^functions/',
              '^@/lib', '^lib/',
              '^@/libs', '^libs/',
              '^@/utils', '^utils/',
              '^@/shared', '^shared/',
            ],
            ['^@/dtos', '^dtos/', '^@/models', '^models/', '^@/types', '^types/'],
            ['^@/assets', '^assets/', '^@/styles', '^styles/', '^@/theme', '^theme/'],
            ['^@/'],
            ['^\\.'],
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-empty-pattern': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-undef': 'off',
    },
  },
];
