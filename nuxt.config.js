export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'restotest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  transition: {
    name: 'slide-bottom'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/base/fonts.scss',
    '~/assets/styles.scss',
    '~/assets/base/breakpoints.scss',
    '~/assets/base/typography.scss',
    '~/assets/base/mixins.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/aos', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', 'vue-scrollto/nuxt', '@nuxtjs/axios'],
  styleResources: {
    scss: [
      '~/assets/base/colors.scss'

    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
