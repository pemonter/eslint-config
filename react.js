module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.spec.js'
        ]
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.jsx',
          '.tsx'
        ]
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
