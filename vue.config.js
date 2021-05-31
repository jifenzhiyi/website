const path = require('path');
const htmlConfig = require('./package.json');

module.exports = {
  lintOnSave: true,
  devServer: {
    hot: true,
    open: true,
    port: 8001,
    host: '0.0.0.0',
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
