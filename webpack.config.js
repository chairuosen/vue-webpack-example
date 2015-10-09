/*
    To start a dev server
    ===========================
    
    ```
    npm install -g webpack-dev-server
    webpack-dev-server  --hot --inline --port 5000
    ```
    then open localhost:5000 in browser
*/
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var uglyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

module.exports = {
    entry:{
        'main':['./main.js']
    },
    output:{
        path:'./build',
        publicPath:'/build/',
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=819'
            }
        ]
    },
    plugins:[
        // uglyPlugin,
        // commonsPlugin
    ]
}