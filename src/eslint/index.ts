export default {
  $schema: 'https://json.schemastore.org/eslintrc',
  extends: [
    'eslint:recommended',
    require.resolve('@umijs/lint/dist/config/eslint'),
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'unicorn',
    'import',
    'unused-imports',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-empty': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-unused-vars': 0,
    'react/display-name': 0,
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/filename-case': 0,
    'unicorn/import-style': 0,
    'unicorn/no-anonymous-default-export': 0,
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-array-reduce': 0,
    'unicorn/no-empty-file': 'warn',
    'unicorn/no-negated-condition': 'warn',
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-null': 'warn',
    'unicorn/no-typeof-undefined': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/prefer-code-point': 'warn',
    'unicorn/prefer-logical-operator-over-ternary': 0,
    'unicorn/prefer-module': 0,
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
    'unicorn/prefer-type-error': 'warn',
    'unicorn/prevent-abbreviations': 0,
    'unicorn/switch-case-braces': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
  },
};
