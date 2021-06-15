const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "A-Chan's Shokudou",
      templateContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>A-Chan's Shokudou</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div class="container"></div>
  </body>
</html>
      
`,
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "./src/assets")],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,

        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
};
