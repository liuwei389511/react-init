/** @format */

module.exports = {
  output: {
    path: join(__dirname, "../dist"),
    publicPath: "/",
    filename: "scripts/[name].[contenthash:5].bundle.js",
    assetModuleFilename: "images/[name].[contenthash:5][ext]",
  },
};
