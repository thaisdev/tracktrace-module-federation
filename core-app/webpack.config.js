const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9001/",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9001,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      title: "Track&Trace",
    }),
    new ModuleFederationPlugin({
      name: "CoreApp",
      remotes: {
        FleetApp: "FleetApp@http://localhost:9002/remoteEntry.js",
        AlertApp: "AlertApp@http://localhost:9003/remoteEntry.js",
      },
    }),
  ],
};
