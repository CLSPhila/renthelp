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
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Box>
        <LogoImage />
      </Box>
      <Box as="h1" style={{ margin: 0 }}>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
