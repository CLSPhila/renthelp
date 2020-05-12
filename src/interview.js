import React from "react"
import * as questions from "./questions"
import { navigate } from "gatsby"

export const initialQuestions = {
  userName: {
    answer: null,
  },
  isRenter: {
    answer: null,
  },
  needsSecurityDepositHelp: {
    answer: null,
  },
  needsRentHelp: {
    answer: null,
  },
  rentalHousingType: {
    answer: null,
  },
  zipCode: {
    answer: null,
  },
  westPhilly: {
    answer: null,
  },
  yearsAtAddress: {
    answer: null,
  },
  leaseStart: {
    answer: null,
  },
  leaseEnd: {
    answer: null,
  },
  numInHousehold: {
    answer: null,
  },
  userAge: {
    answer: null,
  },
  monthlyIncome: {
    answer: null,
  },
  veteran: {
    answer: null,
  },
  involvedWithDHS: {
    answer: null,
  },
  receivedOHSServices: {
    answer: null,
  },
  receivedCAOAssistance: {
    answer: null,
  },
  isImmigrant: {
    answer: null,
  },
  recentFire: {
    answer: null,
  },
}

export const pickQuestion = (state, dispatch) => {
  console.log("Picking questions.")
  console.log(state)
  if (state.isRenter.answer === null) {
    return <questions.IsRenter questionId="isRenter" dispatch={dispatch} />
  }
  if (state.isRenter.answer === "no") {
    return navigate("/results")
  }
  try {
    let sources = collectEligibleSources(state)
    return navigate("/results", { sources })
  } catch (err) {
    console.log("Error thrown")
    console.log(err)
    return <err.Component questionId={err.questionId} dispatch={dispatch} />
  }
}

/** Emulating the docassemble method for picking the next question to show. Try to figure out the sources that a person is eligible for,
 * and when a piece of info is missing, throw an error.
 *
 * the error thrown should be an object identifying the component and questionId that
 * needs to get asked.
 */
const collectEligibleSources = state => {
  var sources = []
  console.log("collectEligibleSources")
  console.log(state)
  if (state.zipCode.answer === null) {
    throw {
      questionId: "zipCode",
      Component: questions.ZipCode,
    }
  }
}

/**
 * Uses the global monthly_income & household_size variables to determine whether
    a user is under the annual income requirements set by OHS'
    homelessness prevention program. These income requirements differ based on
    the user's household size
 * @param {*} householdSize 
 * @param {*} monthlyIncome 
 */
const isUnderOHSIncomeReq = (householdSize, monthlyIncome) => {
  const maxIncomePerHouseholdSize = {
    1: 16900,
    2: 19300,
    3: 21700,
    4: 24300,
    5: 28440,
    6: 32580,
  }
  const householdSizeMod = householdSize > 6 ? 6 : householdSize
  const maxIncome = maxIncomePerHouseholdSize[householdSizeMod]
  return monthlyIncome * 12 > maxIncome ? true : false
}
