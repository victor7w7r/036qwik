module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:qwik/strict',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['warn', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      'ignoreArrowShorthand': true
    }],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    'array-bracket-spacing': ['warn', 'never'],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', { 'before': true, 'after': true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'default-param-last': 'off',
    'dot-location': ['error', 'property'],
    'eol-last': ['warn', 'never'],
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'func-call-spacing': ['error', 'never'],
    'func-style': ['warn'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['warn', {
      'overrides': {
        'if': { 'after': false },
        'for': { 'after': false },
        'while': { 'after': false },
        'switch': { 'after': false }
      }
    }],
    'max-statements-per-line': ['warn', { 'max': 1 }],
    'new-parens': ['error', 'always'],
    'no-confusing-arrow': 'warn',
    'no-console': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'warn',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'warn',
    'no-multi-spaces': 'warn',
    'no-negated-condition': 'warn',
    'no-new-func': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
    'no-undefined': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-return': 'warn',
    'no-useless-rename': 'warn',
    'no-unreachable-loop': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['warn', 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': ['warn', 'after', {
      'overrides': { '?': 'before', ':': 'before' }
    }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quotes': ['warn', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'qwik/jsx-img': 'off',
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-spacing': ['warn', 'never', { 'allowMultiline': true }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-indent': ['warn', 2, { 'checkAttributes': true }],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': ['warn', {
      'beforeClosing': 'proportional-always'
    }],
    'react/hook-use-state': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-unknown-property': 'off',
    'react/no-unstable-nested-components': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-in-parens': ['warn', 'never'],
    'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    'template-tag-spacing': ['warn', 'never'],
    'template-curly-spacing': ['warn', 'never'],
    'yoda': ['error', 'never', { 'exceptRange': false }]
  },
  settings: {
    react: { version: '18' }
  }
};