const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
      path.resolve(__dirname, 'src/index.js'),
      path.resolve(__dirname, 'src/styles/styles.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader'
          }
      }, {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
        filename: 'css/main.css'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    port: 9000
  }
};
