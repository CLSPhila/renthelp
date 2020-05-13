import React, { useState } from "react"
import { Box, Flex } from "rebass"
import { Label } from "@rebass/forms"
import { actions } from "../questioner"

export const ButtonOptionsField = props => {
  const { questionId, dispatch, defaultAnswer, labelText } = props
  const initialAnswer = defaultAnswer || ""
  const [answer, setAnswer] = useState(initialAnswer)
  const handleChange = e => {
    setAnswer(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(actions.UPDATE_ANSWER(questionId, answer))
  }

  return (
    <Box as="form" id={questionId} onSubmit={handleSubmit}>
      <Label htmlFor={questionId}>{labelText}</Label>
      <Flex flexWrap="wrap" mx={2}>
        {props.children.map((button, idx) => {
          return (
            <Box
              key={idx}
              px={3}
              py={1}
              sx={{
                button: {
                  ":hover": {
                    backgroundColor: "secondary",
                  },
                },
              }}
            >
              {React.cloneElement(button, { onClick: handleChange })}
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
