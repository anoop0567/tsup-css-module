import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "src/tokens/index.css"],
  dts: true,
  clean: true,
  format: ["esm"],
  loader: {
    ".css": "copy",
  },
  splitting: false,
  external: ["react", "react-dom", "class-variance-authority"],
});
