import React from "react"
import { navigate } from "gatsby"
import { Button } from "rebass"

const clickHandler = href => () => {
  navigate(href)
}

export const NavButton = props => {
  const { href, children } = props
  return (
    <Button
      sx={{
        ":hover": {
          backgroundColor: "secondary",
        },
      }}
      variant="secondary"
      mr={2}
      onClick={clickHandler(href)}
    >
      {children}
    </Button>
  )
}
