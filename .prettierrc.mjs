/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        // singleQuote: true,
        // semi: true,
        // tabWidth: 2,
        // useTabs: false,
        // printWidth: 80,
      },
    },
  ],
};

// pnpm exec prettier . --write
