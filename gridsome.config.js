module.exports = {
  siteName: 'Kaleem Clarkson',
  siteDescription: 'A starter project for Gridsome with Bootstrap for you to quickly build a resume.',
  siteUrl: 'https://gridsome-starter-resume.loke.dev',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}