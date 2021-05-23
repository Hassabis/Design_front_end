const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
    chainWebpack: config => {
        // 让 babel 转码一些最新的 js API
        config.entry('main').add('babel-polyfill')
        config.module
            .rule('image')
            .test(/\.ico$/)
            .use('url-loader')
            .loader('url-loader')
    },
    css: {
        sourceMap: true
    },
    // 不需要生产环境的 source map
    productionSourceMap: false,
    // 开发环境下的服务端配置
    configureWebpack:{
        plugins:[
            new webpack.ProvidePlugin({
                $:'jquery',
                jQuery:'jquery',
                'windows.jQuery':'jquery',
                Popper:["popper.js","default"]
            })
        ]
    },
    devServer: {
        public: '192.168.149.1:8080/index',
        port: '8080',
        index: 'homework.html',
        proxy: {
            "/api": {
                target: "http://192.1.2.74:8081/edu/",
                pathRewrite: {
                    "^/api": ""
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
}