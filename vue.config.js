// vue.config.js
// const path = require('path')

// const resolve = dir => path.join(__dirname, dir)
// let pages = null
// const buildModes = ['deploy', 'test', 'prod']
// // 读取 pages 配置文件.
// if (process.env.VUE_APP_ENV && buildModes.includes(process.env.VUE_APP_ENV)) {
//   console.log('<-----------------当前环境:' + process.env.VUE_APP_ENV + '----------------->')
//   let { template, systems, generatePagesConfig } = require(resolve('src/config/module.config.js'))
//   pages = generatePagesConfig(systems, template)
// } else {
//   pages = require(resolve('src/config/config.app.js'))
// }
// console.log(pages)

module.exports = {
  // 项目部署路径
  publicPath: '/',
  /**
	 * 定制iview 主题 配置 less-loader
	 * 具体可查看 https://github.com/iview/iview/issues/4156
	 * 根据 vue-cli 3.0 文档 css  loader 相关推荐使用这种配置方式,
	 */
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },

  chainWebpack: config => {
    // 添加 iview-loader
    // config.module
    //   .rule('vue')
    //   .use('iview-loader')
    //   .loader('iview-loader')
    // // 配置所有 iView 组件标签名可以使用前缀 i-
    //   .tap(options => Object.assign({}, options, { prefix: true }))
    //   .end()

    // 添加路径别名
    config.resolve.alias
    // 公共组件路径
      .set('@', resolve('src/'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 启用dll,动态库文件每次打包生成的vendor的[chunkhash]值就会一样,
  // 用于后期迭代时 vendor 缓存.
  // dll: true,
  // pages,
  devServer: { // 支持所有的wenpack-dev-server的所有选项
    port: 8085, // 端口号
    // https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    /**
		 * 指定默认打开路径/ 启动第一个
		 * 注: cli-serve bug,@vue/cli-service/lib/commmands/serve.js#link:245
		 * 手动修复,预计下个版本官方修复.
     * 手动修复如下.
     * if (args.open || projectDevServerOptions.open) {
          const pageUri = (projectDevServerOptions.openPage && typeof projectDevServerOptions.openPage === 'string')
            ? projectDevServerOptions.openPage
            : ''
          openBrowser(urls.localUrlForBrowser + pageUri)
        }
		 */
    /**
		 * 2018-9-12 @vue/cli-service 3.0.2 已修复该问题.
		 */
    // openPage: `${Object.keys(pages)[0]}/`
    // openPage: 'portal/'
    // proxy: 'http://localhost:4000' // 配置跨域处理
    /* proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
    },  // 配置多个代理 */
  }
}
