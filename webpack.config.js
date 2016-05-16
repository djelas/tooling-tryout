var webpack = require('webpack');
var mainPath = require.resolve("./src/main.ts");

console.log(mainPath);

module.exports = {  
    entry: {
        bundle: mainPath,
        vendor: []
    },
    output: {
        path:     'dist',
        filename: '[name].js',
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { 
                test: /\.ts$/, 
                loader: 'ts-loader' 
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
    ]
}