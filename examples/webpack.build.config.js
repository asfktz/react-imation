process.env.NODE_ENV = 'production';

var config = require('./webpack.config');

config.output.path = 'examples/js';

module.exports = config;
