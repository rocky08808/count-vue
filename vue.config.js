module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'docs',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9000',
                changeOrigin: true
            }
        }
    }
}