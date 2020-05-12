import React, { useReducer} from "react"


export const actions = {
    UPDATE_ANSWER: (questionId, answer) => {
        return({
            type: 'UPDATE_ANSWER',
            payload: {
                id: questionId,
                answer: answer
            }
        })
    }
}

const questionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ANSWER":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          answer: action.payload.answer,
        },
      };

    default:
      return state;
  }
};

function createQuestions(questions) {
    return(questions)
}

function Questioner({ questions, pickQuestion }) {

  const [state, dispatch] = useReducer(
    questionReducer,
    questions,
    createQuestions
  );
  return <div>{pickQuestion(state, dispatch)}</div>;
}

export default Questioner;