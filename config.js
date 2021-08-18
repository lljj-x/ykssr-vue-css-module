module.exports = {
    chainBaseConfig: (chain) => {
        chain.module.rule('css')
            .use('css-loader')
            .tap((options) => {
                options.modules = true;
                options.localIdentName = '[name]__[local]___[hash:base64:5]';
                return options
            })
    }
}
