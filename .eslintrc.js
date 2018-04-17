module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false
  },

  env: {
    es6: true,
    node: true,
    mocha: true
  },

  extends: [
    'standard',
    'plugin:vue/strongly-recommended'
  ],

  plugins: [
    'vue'
  ],

  globals: {
    FileReader: true,
    File: true,
    location: true,
    localStorage: true,
    expect: true,
    sinon: true
  },

  rules: {
    'space-before-function-paren': [2, 'never'],
    'vue/require-default-prop': 0,
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/no-unused-vars': 0,
    'vue/require-v-for-key': 0,
    'no-unused-expressions': 0,
    'vue/max-attributes-per-line': [2, {
      "singleline": 5,
      "multiline": {
        "max": 5,
        "allowFirstLine": false
      }
    }]
  }
}

