const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const path = require( 'path' );

module.exports = {
    context: __dirname,
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
    },
    // devServer: {
    //     historyApiFallback: true
    // },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ErrorOverlayPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        })
    ]
};