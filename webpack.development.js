const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = (env) => {
  const isDev = env.development === true;
  console.log({ isDev });
  return {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "public"),
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
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    mode: isDev ? "development" : "production",
    devtool: isDev ? "eval-source-map" : "hidden-source-map",
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
  };
};
