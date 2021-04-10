const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Earthquake Zen Garden',
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development',
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
      hot: false,
      open: true,
    },
  };
};
