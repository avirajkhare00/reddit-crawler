module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    // 'plugin:eslint-plugin/recommended',
    'plugin:import/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/extensions': [0, { "<js>": "always" }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
  },
  plugins: [
    'import',
  ],
  settings: {
    "import/extensions": [
      ".js",
      ".jsx"
    ]
  }
};
