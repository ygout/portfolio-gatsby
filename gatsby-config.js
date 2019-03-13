require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio YG`,
    description: `Yohann Goutaret développeur FullStack portfolio`,
    author: `@ygout`,
  },
  plugins: [
    `gatsby-plugin-slug`,
    `gatsby-plugin-react-helmet`,
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
        name: `projects`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categories`,
        path: `${__dirname}/src/data/categories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experiences`,
        path: `${__dirname}/src/data/experiences`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `educations`,
        path: `${__dirname}/src/data/educations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/src/data/skills`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136167079-1",
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     // CommonMark mode (default: true)
    //     commonmark: true,
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // Pedantic mode (default: true)
    //     pedantic: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-relative-images',
    //         options: {
    //           name: 'uploads',
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 2048,
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-copy-linked-files',
    //         options: {
    //           destinationDir: 'static',
    //         },
    //       },
    //     ],
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-gatsby`,
        short_name: `portfolio yg`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ms-icon-310x310.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
