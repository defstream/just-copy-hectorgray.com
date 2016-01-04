var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');



module.exports = {
  entry: './src/js/app/main.jsx',
  output: {
    filename: 'js/app.js', //this is the default name, so you can skip it
    path: './src' //path to where webpack will build your stuff
      //publicPath: "/assets/" //path that will be considered when requiring your files
      //at this directory our bundle file will be available
      //make sure port 8090 is used when launching webpack-dev-server
      //publicPath: '/js'
  },
  module: {
    loaders: [{
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader?path=build/img&name=img/img-[hash:6].[ext]'
    }, {
      //tell webpack to use jsx-loader for all *.jsx files
      test: /\.jsx$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }

    }, {
      test: /\.jsx$/,
      loader: 'regenerator'
    }]
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
}
