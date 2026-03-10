import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import postcssNested from "postcss-nested";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [autoprefixer, cssnanoPlugin, postcssNested],
};
