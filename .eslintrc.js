module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
   // required to lint *.vue files
   plugins: [
    'vue'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow async-await
    'generator-star-spacing': 'off',
    "space-before-function-paren": 0,
    "eol-last": 0,
    "prettier/prettier": [
      "error",
      {
        "semi": false,
       "singleQuote": true,
       "trailingComma": "none",
       "bracketSpacing": true,
       "jsxBracketSameLine": true
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
