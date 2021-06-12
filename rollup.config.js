import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from "./package.json";

const extensions = [".js", ".jsx"];

export default {
  input: "./src/index.js",
  output: {
    file: packageJson.main,
    format: "cjs",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "styled-components": "styled",
    },
    exports: "named",
  },
  external: [
    "react",
    "react-dom",
    /@babel\/runtime/,
    "styled-components",
    "@aiwizo/application-styles",
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        "@babel/preset-react",
      ],
      plugins: ["@babel/transform-runtime"],
      extensions,
      babelHelpers: "runtime",
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
