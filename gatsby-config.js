module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vlbrerbr",
        dataset: "production",
        watchMode: true, // Updates your pages when you create or update documents
        token:
          "skL7HRjEsTSDocp0ayBefAqZaCCTKrntD7uemtyQxP7t3GtBTkPQXfHbVSlbCRxVGZmyCLLZ3je3APeo1lZh9RVSH12Kgs1fPHrT7mTIpgXmODGpjoH5qRzAzb2rMIVdIybmsQn1WdbNxt5GDoohZdK2deQLnUO5RGF8rSZN4i3xfoiJxlgt",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
