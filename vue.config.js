module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('svg')
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader'
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/sass/_all.scss";`
      }
    }
  }
}
