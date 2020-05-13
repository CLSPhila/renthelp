import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Box, Text } from "rebass"

/**
 * List blurbs about the different service providers.
 */
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Service Providers</h1>
      {data.allMarkdownRemark.edges.map(({ node }, idx) => {
        return (
          <Box key={idx}>
            <h4>{node.frontmatter.title}</h4>
            <Text>{node.frontmatter.availability}</Text>
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
          id
          frontmatter {
            availability
            title
          }
        }
      }
    }
  }
`
