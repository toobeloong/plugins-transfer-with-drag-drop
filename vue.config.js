module.exports = {
  configureWebpack: {
    output: {
      filename: 'iconPicker.common.js'
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
