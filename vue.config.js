const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'components': resolve("src/components"),
                'assets': resolve('src/assets'),
                'views': resolve('src/views'),
                'common': resolve('src/common'),
                'network': resolve('src/network'),
            }
        }
    }

    // chainWebpack:(config)=>{
    //     config.resolve.alias
    //         //第一个参数：别名 第二个参数：路径
    //         .set('components',resolve('src/components'))
    //         .set('assets',resolve('src/assets'))
    //         .set('common',resolve('src/common'))
    //         .set('views',resolve('src/views'))
    // }
}