const tseslint = require('typescript-eslint');
const importHelpersPlugin = require('eslint-plugin-import-helpers');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');
const neostandard = require('neostandard');

module.exports = [
  ...tseslint.configs.recommended,
  ...neostandard({ noStyle: true }),
  eslintConfigPrettier,
  prettierRecommended,
  {
    languageOptions: {
      globals: {
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
      'import-helpers': importHelpersPlugin,
    },
    settings: {
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: true,
        },
      ],
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            ['/^@apollo/', '/^@nest/', '/^@nestjs/'],
            '/^@prisma/',
            'module',
            '/^@shared/',
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
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'off',
    },
  },
];
