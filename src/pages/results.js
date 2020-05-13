import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Box, Text, Heading } from "rebass"
import Layout from "../components/layout"
import { PrintButton } from "../components/utility/print"

/**
 * Explain to the user what rental assistance services they appear to be eligible for.
 */
export default props => {
  const { location, data } = props
  const { state } = location
  const { answers, sources } = state
  const isRenter = answers ? answers.isRenter : false
  const rentalHousingType = answers ? answers.rentalHousingType : null
  return (
    <Layout>
      <PrintButton />
      <Box>
        {isRenter ? (
          <IsRenter queryData={data} sources={sources} />
        ) : (
          <IsNotRenter />
        )}
        <Box>
          {rentalHousingType === "public" ? (
            <Text>
              Please consider talking with your manager about a rent reduction.
            </Text>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Layout>
  )
}

/**
 * The user is a renter, so show them information about sources of rental assistance that are available.
 * @param {*} props
 */
const IsRenter = props => {
  const { sources, queryData } = props

  return sources && sources.length > 0 ? (
    <DescribeAssistanceSources queryData={queryData} sources={sources} />
  ) : (
    <NoAssistanceSourcesFound />
  )
}

const IsNotRenter = props => {
  return (
    <Box>
      <Text>
        This screening tool is meant to be used by renters. If you are a renter
        and are looking for assistance, please restart the{" "}
        <Link to="/screener">screener</Link>.
      </Text>
    </Box>
  )
}

const DescribeAssistanceSources = props => {
  const { sources, queryData } = props
  console.log("query data:")
  console.log(queryData)

  return (
    <Box>
      <Text>
        Based on the answers you provided to our questions, we think you may be
        able to seek rental assistance from the following organizations.
      </Text>
      <Text>
        Please note that you will still need to visit and apply separately for
        assistance at each organization.
      </Text>
      <Box>
        {sources.map((s, idx) => {
          return <ProviderBlurb queryData={queryData} key={idx} provider={s} />
        })}
      </Box>
    </Box>
  )
}

const NoAssistanceSourcesFound = props => {
  return (
    <Box>
      <Text>
        We aren't able to match you with any resources at this time. Please
        consider talking with your manager about a rent reduction.
      </Text>
    </Box>
  )
}

const getBlurb = (provider, queryData) => {
  const nodes = queryData.allMarkdownRemark.edges.filter(({ node }) => {
    return node.fields.slug.includes(provider)
  })
  if (nodes.length !== 1) {
    console.log(`Oops. For ${provider}, getBlurb() found:`)
    console.log(nodes)
    return {}
  }
  const { node } = nodes[0]
  return node
}

const ProviderBlurb = props => {
  const { provider, queryData } = props
  const node = getBlurb(provider, queryData)
  return (
    <Box py={2}>
      <Heading fontSize={2}>{node.frontmatter.title}</Heading>
      <Text>To apply for help, you can {node.frontmatter.availability}</Text>
      <Box
        sx={{
          p: {
            marginBottom: 0,
          },
        }}
        dangerouslySetInnerHTML={{ __html: node.excerpt }}
      ></Box>
      <Text px={2}>
        <Link to={`/service-providers${node.fields.slug}`}>read more...</Link>
      </Text>
    </Box>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            availability
            title
          }
        }
      }
    }
  }
`
