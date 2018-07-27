var path = require('path');

module.exports = {
    mode: 'development',
    entry: './components/Index.js',
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'jsBundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, include: path.join(__dirname, '/components'), loader: ['babel-loader']},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']}
        ]
    }
};