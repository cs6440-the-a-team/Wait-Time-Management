const path = require("path");

module.exports = {
    entry: {
        admin: "./src/admin.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties', 'transform-object-rest-spread']
                }
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};
