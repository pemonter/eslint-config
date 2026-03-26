# ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint @pemonter/eslint-config
```

2. Create a `eslint.config.js` file extending the config:
```
import reactEslintConfig from '@pemonter/eslint-config/react.js';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...reactEslintConfig,
]
```
