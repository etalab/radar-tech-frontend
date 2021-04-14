const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `./env/${activeEnv}.js`,
})
module.exports = {
  siteMetadata: {
    title: `Métiers techniques de l'État: sondage`,
    description: `tagline tagline`,
  },
  plugins: [
    `gatsby-env-variables`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'radarTechTest',
        fieldName: 'radarTechTest',
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_API_TOKEN}`,
        },
        url: process.env.GATSBY_API_URL,
      },
    },
    {
      // sourcer /pages-metiers nous permet d'accéder à `pages-metiers.json`,
      // une array d'objects dont chaque item sera une de nos routes
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages-metiers`,
        path: `${__dirname}/pages-metiers/`,
      },
    },
    {
      // rendre chaque item dans l'array d'objects contenue dans
      // `pages-metiers.json` disponible sous la key `PageMetier`
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name === `pages-metiers`) {
            return `PageMetier`;
          }
          return name;
        },
      },
    },
  ],
};
