////config/index.js
//module.exports = {
//	dev: {
//		proxyTable: {
//	// proxy all requests starting with /api to jsonplaceholder
//			'/': {
//				target: 'http://localhost:80',
//				changeOrigin: true,
//			}
//		}
//	}
//}

module.exports = {
	devServer: {
		proxy: {
			'^/': {
					target: 'http://localhost:80',
	        ws: true,
	        changeOrigin: true
			},
		}
	}
}
