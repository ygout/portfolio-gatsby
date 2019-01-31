/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const remark = require('remark')
const remarkHTML = require('remark-html')
// const remark = require('remark');
// const remarkHTML = require('remark-html');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/project-page.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const id = node.id
      createPage({
        path: node.fields.slug,
        component: projectTemplate,
        context: {
          id,
        }, // additional data can be passed via context
      })
    })
  })
}
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if ('frontmatter' in node) {
    const markdown = node.frontmatter.description
    const markdownHtml = remark()
      .use(remarkHTML)
      .processSync(markdown)
      .toString()

    createNodeField({
      node,
      name: `descriptionHtml`,
      value: markdownHtml,
    })
  }
}
