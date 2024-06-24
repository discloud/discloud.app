import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.ts"] },
  { ignores: ["**/*.js", "**/*.d.ts"] },
  { files: ["**/*.ts"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unsafe-declaration-merging": 0,
      "@typescript-eslint/no-unused-vars": [1, {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      }],
      "comma-dangle": [1, "always-multiline"],
      indent: [1, 2, { "SwitchCase": 1 }],
      "no-empty": 0,
      "no-unused-vars": 0,
      "prefer-const": 1,
      quotes: [1, "double"],
      semi: [1, "always"],
    },
  },
];
