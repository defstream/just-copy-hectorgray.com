var webpack = require('webpack');



module.exports = {
  entry: './src/js/app/main.jsx',
  output: {
    filename: 'js/app-1.0.1.js', //this is the default name, so you can skip it
    path: './src' //path to where webpack will build your stuff
  },
  module: {
    loaders: [{
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
