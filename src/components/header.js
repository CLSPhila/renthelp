/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { LogoImage } from "./logoImage"
import { Flex, Box } from "rebass"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      color: "background",
      backgroundColor: `primary`,
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `1rem 1rem`,
        alignItems: "center",
      }}
    >
      <Box width={["60px", "100px"]} px={2}>
        <a href="https://clsphila.org">
          <LogoImage />
        </a>
      </Box>
      <Box as="h1" style={{ margin: 0, alignContent: "center" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Box>
    </Flex>
    <Box
      py={"0.5rem"}
      sx={{
        backgroundColor: "warning",
        paddingLeft: "2rem",
        color: "#000",
      }}
    >
      This site is still in testing mode. Its not complete or accurate. Do not
      rely on it.
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
