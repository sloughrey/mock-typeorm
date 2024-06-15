import swc from "rollup-plugin-swc";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          dynamicImport: true,
          decorators: true,
        },
        target: "es2021",
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
  ],
  test: {
    globals: true,
    includeSource: ["src/**/*.{js,ts}", "tests/**/*.{js,ts}"],
    exclude: [...configDefaults.exclude, "**/node_modules/**", "**/build/**"],
  },
});
