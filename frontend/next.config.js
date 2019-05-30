const withImages = require('next-images')

module.exports = withImages({
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});