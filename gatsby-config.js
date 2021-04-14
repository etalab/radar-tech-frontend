module.exports = {
  siteMetadata: {
    title: `Métiers techniques de l'État: sondage`,
    description: `tagline tagline`,
  },
  plugins: [
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb250ZW5kIiwicGFzc3dvcmQiOiIzMDVlY2FmMmY3MWM3ZmQ3MDU2YmRlZDQ4MDNmMDhlY2JiYzcyOWQ5Yjk2NTJmMDhiMDcxM2I2YjI1MTFhNmRjIiwiaWQiOiI2MDc2OTgyMDk3ODg2MGJlMzAyNGM2ZDYiLCJpYXQiOjE2MTgzODUwNTB9.J_FBCXONuyCZ-JZxw9KV5JuTY8N7vHa5i2UBo6zj-Iw`,
        },
        url: 'http://radartech-backend-test.app.etalab.studio/graphql',
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
