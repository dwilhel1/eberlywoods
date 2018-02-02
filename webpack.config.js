const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './src/entry/app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Eberlywoods',
      inject: true,
      template: './src/entry/index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss|.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  Autoprefixer({
                    browsers: [
                      'ie >= 10',
                      'last 2 versions',
                      'last 2 android versions',
                      'last 2 and_chr versions',
                      'iOS >= 8',
                    ],
                  }),
                ];
              },
            },
          }, {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          }],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    stats: 'errors-only',
    open: true,
  },
  devtool: 'inline-source-map',
};
