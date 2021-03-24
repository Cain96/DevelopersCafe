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
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
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
        shortName: config.shortName,
        description: config.description,
        startUrl: config.pathPrefix,
        backgroundColor: config.backgroundColor,
        themeColor: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
