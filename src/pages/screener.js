import React from "react"
import Layout from "../components/layout"
import Questioner from "../components/questioner"
import { initialQuestions, pickQuestion } from "../interview"

export default (props) => {
    return <Layout>
        <Questioner
            questions={initialQuestions}
            pickQuestion={pickQuestion}>
        </Questioner>
    </Layout>
}