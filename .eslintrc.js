module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-cycle': 0,
    'consistent-return': 0, // return 后面是否允许省略
    'import/extensions': 0,
    'import/no-unresolved': 0, // import使用@别名时eslint识别忽略
    'import/prefer-default-export': 2, // import中的内容只有一个需要设置default
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': [0, 'windows'],
    'max-len': 0, // 一行代码的最大长度限制，增加代码的可读性
    'no-new': 0,
    'no-undef': 'warn',
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-extra-boolean-cast': 'warn',
    'no-unused-vars': 1,
    'prefer-destructuring': 0,
    'no-restricted-globals': 0,
    'no-new-object': 0,
    'no-plusplus': 0,
    'prefer-promise-reject-errors': 0,
    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'never' }],
    'vue/max-attributes-per-line': 1,
    'vue/require-valid-default-prop': 0,
    'no-trailing-spaces': 0,
    eqeqeq: 0,
  },
};
