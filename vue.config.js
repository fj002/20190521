

// vue.config.js
module.exports = {
  outputDir: process.env.outputDir,
    transpileDependencies:[],

   devServer: {
     // development server port 8080
     port: 8080,
     open: false,
    proxy: {
      '/api': {
        // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
   },


}
