module.exports = {
  pathPrefix: `/timesaver`,
  siteMetadata: {
    title: `Timesaver`,
    description: `An automatic course scheduler that saves time!`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dawson Tech Club Timesaver`,
        short_name: `Timesaver`,
        start_url: `/`,
        background_color: `#11C3C6`,
        theme_color: `#11C3C6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`
  ],
}
