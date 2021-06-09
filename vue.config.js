const path = require('path');
const htmlConfig = require('./package.json');

module.exports = {
  lintOnSave: true,
  devServer: {
    hot: true,
    open: true,
    port: 8001,
    host: '0.0.0.0',
    proxy: {
      '/v1.0.0': {
        target: 'http://47.117.143.104:8750', // cdyq
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        comps: path.join(__dirname, 'src/components'),
      },
    },
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].title = `官网 v${htmlConfig.version}`;
      return args;
    });
  },
};
