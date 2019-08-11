import NuxtConfiguration from '@nuxt/config';

/**
 * Nuxt.js admin console app config.
 */
export const config: NuxtConfiguration =  {
  /**
   * Directory paths options. Remove `rootDir` and `modulesDir` properties if you want to run/build on admin console Nuxt app.
   */
  rootDir: 'src/admin-console',
  modulesDir: ['../../node_modules'],
  /**
   * Application mode.
   */
  mode: 'universal',
  /**
   * Base application routing.
   */
  router: {
    base: '/admin',
    middleware: ['auth']
  },
  /**
   * Authentication middleware.
   */
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
    },
    resetOnError: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/users/login',
            method: 'post',
            propertyName: 'authToken',
          },
          // user: {
          //   url: '/profile',
          //   method: 'get',
          //   propertyName: 'data',
          // },
          logout: false,
          user: false,
        },
      },
    },
  },
  /*
  ** Headers of the page.
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color.
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS.
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App.
  */
  plugins: [
    { src: '~plugins/vee-validate' },
  ],
  /*
  ** Nuxt.js modules.
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration.
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: '/api/v1/',
  },
};

export default config;
