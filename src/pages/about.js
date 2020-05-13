import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text } from "rebass"

export default () => {
  return (
    <Layout>
      <Heading>About this site</Heading>
      <Box>
        <Text>
          We hope this site assists residents of Philadelphia with finding the
          rental assistance programs that exist in the city.
        </Text>
        <Text>
          The site is produced by Community Legal Services of Philadelphia, a
          nonprofit legal services organization. We are lawyers, social workers,
          organizers, and advocates for low-income families in Philadelphia
        </Text>
      </Box>
    </Layout>
  )
}
