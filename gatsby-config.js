module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        content: [
          require("path").join(
            process.cwd(),
            "src/**/!(*.d).{js,jsx,ts,tsx,md,mdx}"
          ),
        ],
        printRejected: true,
        develop: false,
      },
    },
  ],
};
