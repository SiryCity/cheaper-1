module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cheaper-1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'スーパーでよくある「どっちがお得？」を10秒で計算。' },

      //{ hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:description', property: 'og:description', content: 'スーパーでよくある「どっちがお得？」を10秒で計算。' },
      //{ hid: 'og:site_name', property: 'og:site_name', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      //{ hid: 'og:url', property: 'og:url', content: '' },
      //{ hid: 'og:image', property: 'og:image', content: '/icon.png'},


      { name: "robots", content: "noindex" },
      { name: "robots", content: "nofollow" },
      { name: "robots", content: "noachieve" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'universal',
  modules: [
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true,
  },
}

