const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),     // ✅ 반드시 dist로 출력
    filename: '[name].bundle.js',              // ✅ entry 이름별 번들
    clean: true                                 // ✅ 기존 파일 제거
  }
});
