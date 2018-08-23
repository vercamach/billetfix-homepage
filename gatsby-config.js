module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: __dirname + '/content',
        name: 'content',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
