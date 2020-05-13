import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Box, Heading, Text } from "rebass"

/**
 * List blurbs about the different service providers.
 */
export default ({ data }) => {
  return (
    <Layout>
      <h1>Service Providers</h1>
      {data.allMarkdownRemark.edges.map(({ node }, idx) => {
        return (
          <Box py={2} key={idx}>
            <Heading fontSize={2}>{node.frontmatter.title}</Heading>
            <Text>
              To apply for help, you can {node.frontmatter.availability}
            </Text>
            <Box
              sx={{
                p: {
                  marginBottom: 0,
                },
              }}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            ></Box>
            <Text px={2}>
              <Link to={`/service-providers${node.fields.slug}`}>
                read more...
              </Link>
            </Text>
          </Box>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query ServiceProvidersQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(format: HTML)
          frontmatter {
            availability
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
