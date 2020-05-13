import React from "react"
import { Flex, Box, Text } from "rebass"
import { Link } from "gatsby"
export const Footer = props => {
  return (
    <Flex
      sx={{
        backgroundColor: "primary",
        color: "#fff",
        padding: "2rem",
        a: {
          color: "#fff",
        },
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Box flexGrow={1}>
        <Text>
          A project of{" "}
          <a href="https://clsphila.org">
            Community Legal Services of Philadelphia
          </a>{" "}
        </Text>
      </Box>
      <Flex>
        <Box pr={1}>
          <Link to="/about">About</Link>
        </Box>
        <Box pr={1}>
          <Link to="/privacy">Privacy Policy</Link>
        </Box>
      </Flex>
    </Flex>
  )
}
