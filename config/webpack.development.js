/** @format */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve, join } = require("path");
const port = 3003;
module.exports = {
  devServer: {
    //单页的spa应用,需要配置historyApiFallback
    historyApiFallback: true,
    static: {
      directory: join(__dirname, "../dist"),
    },
    hot: true,
    port,
  },
  output: {
    publicPath: "/",
    filename: "scripts/[name].bundle.js",
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./public/favicon.ico",
      template: resolve(__dirname, "../src/index-dev.html"),
    }),
  ],
};
