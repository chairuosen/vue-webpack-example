module.exports = {
    entry:'./main.js',
    output:{
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            }
        ]
    }
}