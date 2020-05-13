import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text } from "rebass"

export default () => {
  return (
    <Layout>
      <Heading>Privacy Policy</Heading>
      <Box>
        <Text>
          This site currently does not do any tracking of any kind, and we don't
          collect any information about users.
        </Text>
        <Text>
          This will change in the future though, so check back here again.
        </Text>
      </Box>
    </Layout>
  )
}
