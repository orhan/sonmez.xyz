require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Orhan Sönmez - Freelance Developer`,
    siteTitleAlt: `Orhan Sönmez - Freelancer React-Native- and Web-Developer`,
    siteHeadline: `Orhan Sönmez - Freelancer React-Native- and Web-Developer`,
    siteUrl: `https://sonmez.xyz`,
    siteDescription: `Personal website of Orhan Sönmez`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@orhnsnmz`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Orhan Sönmez - Freelance Developer`,
        short_name: `Orhan Sönmez`,
        description: `Personal website of Orhan Sönmez`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-6HG6E272FK", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: false,
          cookie_expires: 0,
          send_page_view: true,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ].filter(Boolean),
};
