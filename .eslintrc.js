module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "flowtype", "prettier"],
  parserOptions: {
    ecmaVersion: 2017
  },
  parser: "babel-eslint",
  env: {
    jest: true,
    node: true
  },
  globals: {
    expect: true,
    requireLib: true
  },
  settings: {
    react: {
      version: "16.3"
    }
  },
  rules: {
    // 0 for closing rules
    strict: 0,
    curly: [2, "multi-or-nest", "consistent"],
    "require-jsdoc": 0,
    "max-len": 0,
    "quote-props": 0,
    "no-new": 0,
    quotes: 0,
    "no-console": 0,
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": 0,
    "generator-star-spacing": ["error", "both"],
    "import/no-unresolved": 0
  }
};
