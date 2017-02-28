const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['es2015', 'react']}
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ['url-loader'],
        // loaders: [
        //   'url?limit=10000&hash=sha512&digest=hex&name=[hash].[ext]',
        //   'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        // ],
      },


      { test: /\.eot$/, use: ['file-loader'] },
      { test: /\.(woff|woff2)$/, use: ['file-loader'], /*loader: 'url?prefix=font/&limit=5000'*/ },
      { test: /\.ttf$/, use: ['file-loader'], /*loader: 'url?limit=10000&mimetype=application/octet-stream'*/ },


    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
  }
};
