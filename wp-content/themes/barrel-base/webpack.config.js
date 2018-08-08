const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    main: ['./src/css/main.css', './src/js/main.js']
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.s?css$/,
        extract: true,
        use: [
          'style-loader',
          'css-loader?importLoaders=1&minimize=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }


      ,
        {
            test: /\.(png|svg|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: '/[hash]-[name].[ext]',

                    publicPath: function(url) {
                      return './'+url;
                    },

                } 
            }]
        }


    ]
  },
  resolve: {
    alias: {
      'lib': path.resolve(__dirname, 'src/js/lib'),
      'modules-root': path.resolve(__dirname, 'modules')
    }
  },
  plugins: []
}
