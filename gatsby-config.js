const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(
            process.cwd(),
            "src/**/!(*.d).{js,jsx,ts,tsx,md,mdx}"
          ),
        ],
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
  ],
};
