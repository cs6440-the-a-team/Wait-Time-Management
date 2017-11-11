const path = require("path");

module.exports = {
    entry: {
        admin: "./src/admin.js",
        public: "./src/public.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: [['env', {"targets": {node: "current"}}], 'stage-0', 'react'],
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
