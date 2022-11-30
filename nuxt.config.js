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
      { name:'description', content: 'Personal website of Patryk Bielanin front-end developer - vue and nuxt plugins, discord themes - check out!' },
      { name:'og:title', content: 'Patryk Bielanin - front-end developer personal website' },
      { name:'og:type', content: 'website' },
      { name:'og:author', content: '@PatrykBielanin' },
      { name:'og:description', content: 'Personal website of Patryk Bielanin front-end developer - vue and nuxt plugins, discord themes - check out!' },
      { property: 'og:url', content: 'https://pbielanin.pl' },
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
        'faTimes'
      ],
      brands: [
        'faGithub',
        'faDiscord',
        'faTwitter'
      ]
    }
  },

  plugins: [
      '@/plugins/v-tooltip.js',
      '@/plugins/axios.js'
  ],

  buildModules: [
      '@nuxtjs/fontawesome',
  ],

  modules: [
      ['@nuxtjs/localforage', {
          name: 'Cyberpunk2077-Theme-Discord'
      }],
      '@nuxtjs/tailwindcss',
      '@nuxtjs/axios'
  ],

  build: {
  }
}
