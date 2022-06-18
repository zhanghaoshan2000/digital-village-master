const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

module.exports = {
    lintOnSave: false,
    outputDir: 'dist',
    configureWebpack: {
        plugins: [
            new HtmlWebpackInlinePlugin({
                compress: false
            })
        ]
    },
}
