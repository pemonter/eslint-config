module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': true,
      'endOfLine': 'auto',
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
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
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error'
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    }
  }
}