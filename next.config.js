const withImages = require('next-images');
const withVideos = require('next-videos');
const path = require('path');

module.exports = withVideos(withImages({
  webpack(config, { isServer }) {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|avi|mov|wmv|flv|mkv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    // Handle image files
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images/',
          outputPath: 'static/images/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
}));
