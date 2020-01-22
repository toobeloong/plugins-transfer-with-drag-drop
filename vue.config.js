module.exports = {
  configureWebpack: {
    output: {
      filename: 'vuedragable.common.js'
    },
  },
  devServer: {
    port: '3000'
  },
  css: {
    extract: false
  },
  filenameHashing: false
};
