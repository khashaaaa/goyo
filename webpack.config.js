const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss|less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: false
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'js/output.js',
        publicPath: '/devfolder/'
    }
}