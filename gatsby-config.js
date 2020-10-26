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

module.exports = {
  siteMetadata: {
    title: `Cooparaje`,
    titleTemplate: "%s | Cooparaje",
    description: `Espacio de colaboración libre`,
    url: "https://www.cooparaje.com.ar",
    image: "/ogimage.jpg",
    twitterUsername: `@cooparaje`,
    author: `@cooparaje`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: "gatsby-plugin-crisp-chat",
      options: {
        websiteId: "9b13088c-bcb9-4583-a0ff-72ee1210f99f",
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: true, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: `gatsby-plugin-realfavicongenerator`,
      options: {
        apiKey: "f81275ca26fe58c7ec2e7c3c3922c73c0027de68",
        masterPicture: "src/images/gatsby-icon.png",
        appName: "Cooparaje",
        startUrl: "/",
        themeColor: "#ffffff",
        display: "standalone",
        defaultBackgroundColor: "#ffffff",
        defaultMargin: "10%",
        compression: 3,
        scalingAlgorithm: "Lanczos",
        ios: {
          enabled: true,
          onlyDefaultIcons: false,
          legacyIcons: true,
          precomposedIcons: true,
        },
        windows: {
          enabled: true,
          silhouette: true,
        },
        android: {
          enabled: true,
          legacyIcons: true,
          lowResIcons: true,
        },
        safariPinnedTab: {
          enabled: true,
          threshold: 60,
          silhouette: true,
        },
        openGraph: {
          enabled: true,
          ratio: "square",
        },
        transformGeneratedManifest: (manifest) => {
          manifest.scope = "/"
          if (manifest.icons) {
            manifest.icons = manifest.icons.map((icon) => {
              return {
                ...icon,
                purpose: "maskable",
              }
            })
          }

          return manifest
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            mapping: { Notes: "text/markdown", Attachments: `fileNode` },
          },
        ],
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
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
