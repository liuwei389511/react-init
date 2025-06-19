/** @format */
const TerserPlugin = require("terser-webpack-plugin"); //多线程压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //多线程压缩
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");

const { join, resolve } = require("path");
const exp = require("constants");

module.exports = {
  output: {
    path: join(__dirname, "../dist"),
    publicPath: "/",
    filename: "scripts/[name].[contenthash:5].bundle.js",
    assetModuleFilename: "images/[name].[contenthash:5][ext]",
  },
  performance: {
    maxAssetSize: 250000, //最大资源大小 超过则影响性能
    maxEntrypointSize: 250000, //最大入口文件大小 超过则影响性能
    hints: "warning",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      filename: "index.html",
      favicon: "./public/favicon.ico",
      template: resolve(__dirname, "../src/index-prod.html"),
    }),
    //缓存策略
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true, //service worker 激活后立即控制页面
    //   skipWaiting: true, //跳过等待，直接激活新的 service worker
    //   include: [/\.html$/, /\.js$/, /\.css$/],

    //   //可选 添加运行时缓存策略
    //   runtimeCaching: [
    //     {
    //       urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
    //       handler: "CacheFirst", //使用 缓存优先策略
    //       options: {
    //         cacheName: "images", //缓存名称
    //         expiration: {
    //           maxEntrise: 10, //最多缓存10个文件
    //           maxAgeSeconds: 30 * 24 * 60 * 60, //缓存30天
    //         },
    //       },
    //     },
    //     {
    //       //API  请求混存策略
    //       urlPattern: /^https?:\/\/api\./,
    //       handler: "NetworkFirst",
    //       options: {
    //         cacheName: "api-cache",
    //         networkTimeoutSeconds: 3,
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 5 * 60,
    //         },
    //       },
    //     },
    //   ],
    // }),
  ],
};
