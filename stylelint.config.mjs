/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    "selector-not-notation": "simple",
    "plugin/no-unsupported-browser-features": [
      true,
      {
        ignore: ["css-nesting"],
        severity: "warning",
      },
    ],
    "selector-class-pattern": [
      "^([a-zA-Z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case or capitalized kebab`,
      },
    ],
    "custom-property-empty-line-before": [
      "never",
      { ignore: ["after-custom-property"] },
    ],
  },
};
