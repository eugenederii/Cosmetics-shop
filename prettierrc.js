// .prettierrc.js
/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  proseWrap: "never",
};

export default config;
