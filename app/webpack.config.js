var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: "app.bundle.js"
    },
    module : {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    }
};