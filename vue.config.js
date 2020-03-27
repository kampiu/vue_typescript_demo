/*
 * @Author: KAM
 * @Date: 2019-10-23 15:11:43
 * @LastEditTime: 2019-12-11 16:22:17
 * @LastEditors: Please set LastEditors
 * @Description: 跟进环境参数修改打包配置的baseUrl
 * @FilePath: \vue_typescript_demo\vue.config.js
 */
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
	productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
	// outputDir: `release/${ process.env.VUE_APP_Version }`,
	lintOnSave: false,
	publicPath: './',
	chainWebpack: (config) => {
		config.resolve.alias
		.set('@', resolve('src'))
		.end()
		// 移除 prefetch 插件
		// config.plugins.delete("prefetch-index")
		// 移除 preload 插件
		// config.plugins.delete("preload-index")
	}, // lintOnSave: true,
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				'./src/assets/style/common.less',
			]
		}
	}, // css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true, // 开启 CSS source maps?
		sourceMap: false, // css预设器配置项
		loaderOptions: {}, // 启用 CSS modules for all css / pre-processor files.
		modules: false
	},
	
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.ts', // 模板来源
			template: process.env.NODE_ENV === 'production' ? 'public/index.html' : 'public/testIndex.html', // template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html', // 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'Demo', // 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	parallel: require('os').cpus().length > 1,
	
}
