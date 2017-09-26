if (process.env.NODE_ENV !== 'production') {
  const devConfig = require('./config/webpack.config.dev');
  module.exports = devConfig;
} else {
  const prodConfig = require('./config/webpack.config.prod');
  module.exports = prodConfig;
}
