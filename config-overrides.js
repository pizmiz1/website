const { addBabelPlugins, override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    react: path.resolve("./node_modules/preact/compat"),
    "react-dom/test-utils": path.resolve("./node_modules/preact/test-utils"),
    "react-dom": path.resolve("./node_modules/preact/compat"),
    "react/jsx-runtime": path.resolve("./node_modules/preact/jsx-runtime"),
  }),
  addBabelPlugins("module:@preact/signals-react-transform")
);
