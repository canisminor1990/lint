export default {
  $schema: 'https://json.schemastore.org/stylelintrc',
  extends: [
    require.resolve('@umijs/lint/dist/config/stylelint'),
    'stylelint-config-recommended',
    'stylelint-config-clean-order',
  ],
  overrides: [
    {
      customSyntax: 'postcss-less',
      files: ['*.less', '*.css'],
      plugins: ['stylelint-less'],
      rules: {
        'at-rule-no-unknown': 'never',
        'color-no-invalid-hex': true,
        'function-no-unknown': 'never',
        'less/color-no-invalid-hex': true,
      },
    },
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-empty-source': 'never',
        'no-invalid-double-slash-comments': 'never',
        'no-missing-end-of-source-newline': 'never',
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
      },
    },
  ],
  plugins: ['stylelint-order', 'stylelint-use-logical-spec'],
  rules: {
    'liberty/use-logical-spec': [true, { except: ['float', /^((min|max)-)?(height|width)$/i] }],
  },
};
