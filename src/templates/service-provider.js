import React from "react"
import { Box, Text } from "rebass"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <Box>
        <h3> {data.markdownRemark.frontmatter.title} </h3>
      </Box>
      <Box dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
