require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  downloadLocal: true,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

// gatsby-config.js
const myQuery = `{
  pages: allContentfulRecursos {
    nodes {
      objectID: id  
      featuredImg {
        file {
          url
        }
      }
      url
      title
      slug
      espacio {
        title
        icono
      }
      excerpt {
        excerpt
      }
      tags
    }
  }
}`

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: "recursos", // overrides main index name, optional
  },
]

module.exports = {
  siteMetadata: {
    title: `Cooparaje`,
    titleTemplate: "%s | Cooparaje",
    description: `Espacio de colaboración libre`,
    url: "https://www.cooparaje.com.ar",
    image: "https://www.cooparaje.com.ar/ogimage.jpg",
    twitterUsername: `@cooparaje`,
    author: `@cooparaje`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
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
        name: `backgrounds`,
        path: `${__dirname}/src/bg`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fbb03c`,
        theme_color: `#fbb03c`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
        },
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        enablePartialUpdates: true, // default: false
        matchFields: ["slug", "modified", "espacio"], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        skipIndexing: false, // default: false, useful for e.g. preview deploys or local development
        continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
