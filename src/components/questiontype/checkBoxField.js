import React, { useState } from 'react'
import { Box, Button } from "rebass"
import { Label, Checkbox } from "@rebass/forms"
import { actions } from "../questioner"

export const CheckBoxField = (props) => {
    console.log("checkboxfield")
    const {questionId, dispatch, defaultAnswer, labelText} = props
    const initialAnswer = defaultAnswer || false
    const [answer, setAnswer] = useState(initialAnswer)
    const handleChange = (e) => {
        setAnswer(!answer)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actions.UPDATE_ANSWER(questionId, answer))
    }



    return(
    <Box as='form' id={questionId} onSubmit={handleSubmit}>
            <Label htmlFor={questionId}>
                <Checkbox id={questionId} name={questionId} onClick={handleChange}/>
                    {labelText}
            </Label>
            <Button variant="secondary" type="submit" mr={2}>Next</Button>
     </Box>
    )
}