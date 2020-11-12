module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    `plugin:vue/essential`,
    `@vue/standard`,
    "prettier"
  ],
  parserOptions: {
    parser: `babel-eslint`
  },
}
