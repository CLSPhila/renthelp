import React from "react"
import { Link } from "gatsby"
import { Box, Text } from "rebass"
import Layout from "../components/layout"

/**
 * Explain to the user what rental assistance services they appear to be eligible for.
 */
export default props => {
  const { is_renter, housing_type, sources } = props
  return (
    <Layout>
      <Box>
        {is_renter ? <IsRenter sources={sources} /> : <IsNotRenter />}
        <Box>
          {housing_type === "public" ? (
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
  const { sources } = props

  return sources && sources.length > 0 ? (
    <DescribeAssistanceSources sources={sources} />
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
  const { sources } = props
  return (
    <Box>
      <Text>
        Based on the answers you provided to our questions, we think you may be
        able to seek rental assistance from the following organizations. Please
        note that you will still need to visit and apply separately for
        assistance at each organization.
      </Text>
      <ul>
        {sources.map(s => {
          return <li> {s} </li>
        })}
      </ul>
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
