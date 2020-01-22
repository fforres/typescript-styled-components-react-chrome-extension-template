const path = require("path");

module.exports = {
  entry: {
    backgroundPage: path.join(__dirname, "src/Roots/backgroundPage.ts"),
    newtab: path.join(__dirname, "src/Roots/newtab.tsx"),
    popup: path.join(__dirname, "src/Roots/popup.tsx"),
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
  },
};
