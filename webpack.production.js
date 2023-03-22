const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
require("dotenv").config();

module.exports = (env) => {
  console.log("env", env);
  return {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "build"),
      clean: true,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateContent: `
        <html><body><div id="root"></div></body></html>
       `,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
  };
};
