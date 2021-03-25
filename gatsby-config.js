const path = require(`path`);
const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [path.join(process.cwd(), 'src/**/!(*.d).{js,jsx,ts,tsx,md,mdx}')],
        printRejected: true,
        develop: false,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://anchor.fm/s/8585ef0/podcast/rss`,
        name: `AnchorPodCast`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
