import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import nextPlugin from "eslint-config-next";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  nextPlugin,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ignores: [".next", "node_modules", "dist", "build", ".turbo"],
    plugins: {
      prettier: pluginPrettier,
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off",
      "import/no-unresolved": "off",
      "prettier/prettier": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  prettier,
]);
