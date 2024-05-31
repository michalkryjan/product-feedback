module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    '@stylistic',
  ],
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-text-v-html-on-component': [
      'error',
      {
        allow: ['component']
      }
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/template-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: 'props'
    }],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
      maxBOF: 0
    }],
    '@stylistic/object-curly-newline': ['error', {
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 5
      }
    }],
    '@stylistic/object-property-newline': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/block-spacing': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/brace-style': 'error'
  }
}
