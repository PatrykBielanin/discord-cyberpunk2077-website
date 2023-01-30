export default {
  ssr: false,
  rootDir: process.cwd(),
  buildDir: process.cwd() + '/.nuxt/',

  head: {
    title: 'Cyberpunk 2077 - Better Discord Theme',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name:'description', content: 'Better discord theme inspired by Cyberpunk 2077 User Interface. Simple configuration tool to custom your theme and improve your discord experience.' },
      { name:'og:title', content: 'Cyberpunk 2077 Better Discord Theme - discord theme inspired by in game UI' },
      { name:'og:type', content: 'website' },
      { name:'og:author', content: '@PatrykBielanin' },
      { name:'og:description', content: 'Better discord theme inspired by Cyberpunk 2077 User Interface. Simple configuration tool to custom your theme and improve your discord experience.' },
      { property: 'og:url', content: 'https://cyberpunk.pbielanin.pl' },
      { property: 'og:image', content: 'https://i.imgur.com/gpBEPQy.png' },
      { name:'twitter:site', content: '@PatrykBielanin' },
      { name:'twitter:title', content: 'pbielanin' },
      { name:'twitter:card', content: 'summary_large_image' },
      { property: 'og:locale', content: 'en'},
      { property: "og:locale:alternate", content: "pl_PL" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' }
    ]
  },

  css: [
      '@/assets/css/style.css'
  ],

  components: [
        {
            path: '@/components',
            pathPrefix: false,
        },
    ],

  fontawesome: {
    icons: {
      solid: [
        'faAt',
        'faAngleUp',
        'faStar',
        'faMoon',
        'faSun',
        'faThumbsUp',
        'faDownload',
        'faGear'
      ],
      brands: [
        'faGithub',
        'faDiscord',
        'faTwitter'
      ],
      regular: [
          'faTimesCircle'
      ]
    }
  },

  plugins: [
      '@/plugins/v-tooltip.js',
      '@/plugins/axios.js',
      '@/plugins/vue-number-animation.js',
      '@/plugins/vue-code-highlight.js'
  ],

  buildModules: [
      '@nuxtjs/fontawesome',
      '@nuxt/postcss8'
  ],

  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/toast',
  ],

  build: {
      postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },

  toast: {
      position: 'top-center',
      theme: "outline",
      duration: 4000,
      register: [
          {
              name: 'configurationTool',
              message: 'Configuration tool not avaiable on mobile devices!',
              options: {
                  type: 'error'
              }
          },
          {
              name: 'coppiedText',
              message: 'Text copied to clipboard!',
              options: {
                  type: 'success'
              }
          },
          {
              name: 'errorCustom',
              message: 'Something went wrong! Please try again.',
              options: {
                  type: 'error'
              }
          }
      ]
  }
}
