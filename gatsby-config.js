module.exports = {
  siteMetadata: {
    title: `Finding Rental Assistance in Philly`,
    description: `Answer a few questions to find organizations that might help families afford rent in Philadelphia.`,
    author: `Community Legal Services of Philadelphia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `service_providers`,
        path: `${__dirname}/src/service-providers`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--end-->`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cls-rental-assistance-screener`,
        short_name: `rent-help`,
        start_url: `/`,
        background_color: `#454988`,
        theme_color: `#454988`,
        display: `minimal-ui`,
        icon: `src/images/CLS-Logo_120.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: "@rebass/preset",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
