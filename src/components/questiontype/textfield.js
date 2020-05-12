import React, { useState } from 'react'
import { Box, Button } from "rebass"
import { Label, Input } from "@rebass/forms"
import { actions } from "../questioner"

export const TextField = (props) => {
    const {questionId, dispatch, defaultAnswer, labelText} = props
    const initialAnswer = defaultAnswer || ""
    const [answer, setAnswer] = useState(initialAnswer)
    const handleChange = (e) => {
        setAnswer(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actions.UPDATE_ANSWER(questionId, answer))
    }



    return(
    <Box as='form' id={questionId} onSubmit={handleSubmit}>
             <Label htmlFor={questionId}>{labelText}</Label>
             <Input name={questionId} type="text" value={answer} onChange={handleChange}/>
             <Button variant="secondary" type="submit" mr={2}>Next</Button>
     </Box>
    )
}