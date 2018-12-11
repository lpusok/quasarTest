// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    // plugins: [
    //   'axios'
    // ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      'fontawesome'
      // 'ionicons',
      // 'mdi',
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        });
      }
    },
    devServer: {
      // https: true,
      port: 8181,
      open: false // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      config: {
        cordova: {
          backButtonExit: false
        }
      },
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPageSticky',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QField',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemTile',
        'QItemSide',
        'QModal',
        'QModalLayout',
        'QAlert',
        'QInput',
        'QChip',
        'QCheckbox',
        'QTabs',
        'QTab',
        'QTabPane',
        'QRouteTab',
        'QSpinner',
        'QSpinnerDots',
        'QCard',
        'QCardMedia',
        'QCardTitle',
        'QCardMain',
        'QCardActions',
        'QCardSeparator',
        'QCarousel',
        'QCarouselSlide',
        'QCarouselControl',
        'QSelect',
        'QSearch',
        'QInfiniteScroll',
        'QAutocomplete',
        'QRange',
        'QPopover',
        'QDatetime',
        'QToggle',
        'QSlider',
        'QRating',
        'QRadio',
        'QSpinnerOval'
      ],
      directives: [
        'GoBack',
        'Ripple',
        'CloseOverlay'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'Dialog',
        'Loading',
        'LocalStorage',
        'SessionStorage'
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [
    ],
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      id: 'app.com.spoonacular',
      androidVersionCode: 19,
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
