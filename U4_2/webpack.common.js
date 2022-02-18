const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "assets/src/js/"),
    filename: "[name].js",
  },
};
