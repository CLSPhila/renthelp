import React from "react"
import { Button } from "rebass"

export const PrintButton = props => {
  const handleClick = () => {
    window.print()
    return false
  }

  return (
    <Button variant="primary" onClick={handleClick}>
      Print
    </Button>
  )
}
