module.exports = {
  siteMetadata: {
    title: `Omega Gatsby`,
  },
  //pathPrefix: `/folio-gatsby/public`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
};
