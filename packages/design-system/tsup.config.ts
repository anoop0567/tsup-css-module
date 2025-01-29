import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/index.ts", "src/tokens/index.css"],
  dts: true,
  clean: true,
  format: ["esm"],
  external: ["react", "react-dom", "class-variance-authority"],
  loader: {
    ".css": "copy",
  },
});
