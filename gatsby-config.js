const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const path = `.env.${env}`;
try {
  if (fs.existsSync(path)) {
    console.log('load env file');
    require('dotenv').config({ path });
  }
  // if there is no .env file, env variables should be OS variable
} catch (err) {
  console.error(err);
}

module.exports = {
  siteMetadata: {
    title: `Qui sont les personnels techniques de l'État ?`,
    description: ` `,
    author: `Etalab/Talents/Dinum`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questions-communes`,
        path: `${__dirname}/questions-communes/`,
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
          if (name === `questions-communes`) {
            return `QuestionsCommunes`;
          }
          return name;
        },
      },
    },
  ],
};
