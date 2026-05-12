module.exports = {
  siteMetadata: {
    title: `Fernanda Cruz · Frontend Engineer & Engineering Lead`,
    description: `Portfolio of Fernanda Cruz — Frontend Engineer with 9+ years of experience. Engineering leadership, React, React Native, .NET, GCP, Azure, and AI integration.`,
    siteUrl: `https://fernandacruz.com`,
    image: `/og-image.jpg`,
    author: `Fernanda Cruz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
