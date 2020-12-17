module.exports = {
  siteMetadata: {
    siteUrl: "https://krauss-training.netlify.app",
  },
  plugins: [ 
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify-cache',
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    `gatsby-plugin-preact`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: "KRAUSS Training",
        language: "de",
        description: "KRAUSS Training ist der Trainingsspezialist für Führungskräftetraining, Vertriebstraining und Online-Marketing Training.",
        openGraph: {
          type: 'website',
          locale: 'de',
          url: 'https://krauss-training.netlify.app',
          site_name: 'KraussTraining',
        }, 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KRAUSS Training`,
        short_name: `KRAUSSTraining`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-offline",
  ], 
};
