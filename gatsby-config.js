module.exports = {
  siteMetadata: {
    title: `Fernanda Cruz · Ingeniera de Software & Líder de Equipo`,
    description: `Portfolio de Fernanda Cruz — Ingeniera de Software con 9+ años de experiencia. Liderazgo técnico, .NET, React, Google Cloud, Azure e integración de IA.`,
    siteUrl: `https://fernandacruz.com`,
    image: `/og-image.jpg`,
    author: `Fernanda Cruz`,
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
