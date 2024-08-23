const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  // Your main JavaScript file
    output: {
        path: path.resolve(__dirname, 'build'),  // Output directory for bundled files
        filename: 'index.compiled.js',  // Name of the compiled JavaScript file
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // Source HTML template
            filename: 'index.html',           // Output HTML file name (in the build directory)
            inject: 'body',                   // Automatically inject scripts at the end of the body
        }),
    ],
};
