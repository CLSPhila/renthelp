const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // TODO this should filter for the service-provier content, not all markdown,
  // in case there's ever non-service-provider markdown content.
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `service-providers`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/service-providers${node.fields.slug}`,
      component: path.resolve(`./src/templates/service-provider.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
