module.exports = {
  transpileDependencies: ["vuetify"],
  // hide webpack:// in developer tools > Sources in Chrome
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vuello - by @domicoder";
      return args;
    });
  },
};
