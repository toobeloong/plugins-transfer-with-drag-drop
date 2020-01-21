module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@artsalliancemedia/aam-ui-vue",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
