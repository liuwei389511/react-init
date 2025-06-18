/** @format */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve, join } = require("path");
const FriendlyErrorsWebpackPlugin = require("@soda/friendly-errors-webpack-plugin");
const notifier = require("node-notifier");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${port}`],
        notes: ["💊 构建信息关注窗口右上角!"],
      },
      onErrors: (severity, errors) => {
        if (severity !== "error") {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: "🙅 Webpack error",
          message: severity + ": " + error.name,
          subtitle: error.file || "",
          icon: join(__dirname, "../public/favicon.ico"),
        });
      },
      clearConsole: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
};
