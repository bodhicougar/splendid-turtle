module.exports = {
  pathPrefix: '/',
  siteMetadata: require('./site-metadata.json'),
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-stackbit-static-sass`,
      options: {
        inputFile: `${__dirname}/src/sass/main.scss`,
        outputFile: `${__dirname}/public/assets/css/main.css`,
      },
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Positioning by BlackBoxMediaDesign`,
        short_name: `BlackBoxMD`,
        description: `Positioning Solutions: From the Organization in the Cloud to Digital Marketing - counseling entities strategically.`,
        display: `standalone`,
        icon: `static/images/favicon.png`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a37923`,
      },
    },
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '7395504',
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
      },
    },
  ],
};
