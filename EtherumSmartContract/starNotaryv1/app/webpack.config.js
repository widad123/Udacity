const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),

  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "dist" }]),
  ],
  devServer: {

    static: {
      directory: path.join(__dirname, "./src")
    },},
};
