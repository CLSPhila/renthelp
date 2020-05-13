/* eslint-disable no-throw-literal */
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
  isVeteran: {
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
  experiencedDisaster: {
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
    return navigate("/results", { state: { answers: state } })
  }

  if (state.rentalHousingType.answer === null) {
    return (
      <questions.RentalHousingType
        questionId="rentalHousingType"
        dispatch={dispatch}
      />
    )
  }
  try {
    let sources = collectEligibleSources(state)
    return navigate("/results", { state: { answers: state, sources } })
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

  // Germantown crisis ministry
  if (state.zipCode.answer === null) {
    throw {
      questionId: "zipCode",
      Component: questions.ZipCode,
    }
  } else {
    if (
      germantownCrisisMinistryZipCodes.includes(state.zipCode.answer.trim())
    ) {
      sources.push("germantown-crisis-ministry")
    }
  }

  // Achieveability
  if (achieveAbilityZipCodes.includes(state.zipCode.answer.trim())) {
    if (state.westPhilly.answer === null) {
      throw {
        questionId: "westPhilly",
        Component: questions.WestPhilly,
      }
    }
    if (state.westPhilly.answer === "yes") {
      sources.push("achieveability")
    }
  }

  // Utility emergency services fund
  if (state.isVeteran.answer === null) {
    throw {
      questionId: "isVeteran",
      Component: questions.Veteran,
    }
  } else if (state.isVeteran.answer === "yes") {
    sources.push("utility-emergency-services-fund")
  }

  // DHS Social work
  if (state.involvedWithDHS.answer === null) {
    throw {
      questionId: "involvedWithDHS",
      Component: questions.InvolvedWithDHS,
    }
  } else if (state.involvedWithDHS.answer === "yes") {
    sources.push("dhs-prevention-assistance-fund")
  }

  // Apple tree
  if (state.receivedOHSServices.answer === null) {
    throw {
      questionId: "receivedOHSServices",
      Component: questions.ReceivedOHSServices,
    }
  } else if (state.receivedOHSServices.answer === "no") {
    if (state.numInHousehold.answer === null) {
      throw {
        questionId: "numInHousehold",
        Component: questions.NumInHousehold,
      }
    }
    if (state.monthlyIncome.answer === null) {
      throw {
        questionId: "monthlyIncome",
        Component: questions.MonthlyIncome,
      }
    }
    if (
      isUnderOHSIncomeReq(
        state.numInHousehold.answer,
        state.monthlyIncome.answer
      )
    ) {
      sources.push("apple-tree-philly")
    }
  }

  //County Assist. office.
  if (state.receivedCAOAssistance.answer === null) {
    throw {
      questionId: "receivedCAOAssistance",
      Component: questions.ReceivedCAOServices,
    }
  } else if (state.receivedCAOAssistance.answer === "no") {
    sources.push("county-assistance-office")
  }

  //Hebrew Immigrant Aid Soc.
  if (state.isImmigrant.answer === null) {
    throw {
      questionId: "isImmigrant",
      Component: questions.IsImmigrant,
    }
  } else if (state.isImmigrant.answer === "yes") {
    sources.push("hebrew-immigrant-aid-society")
  }

  // Salvation Army
  // Red cross
  if (state.experiencedDisaster.answer === null) {
    throw {
      questionId: "experiencedDisaster",
      Component: questions.ExperiencedDisaster,
    }
  } else if (state.experiencedDisaster.answer === "yes") {
    sources.push("salvation-army")
    sources.push("red-cross")
  }

  return sources
}

const achieveAbilityZipCodes = ["19139", "19143", "19104", "19151", "19131"]

const germantownCrisisMinistryZipCodes = [
  "19118",
  "19119",
  "19126",
  "19138",
  "19144",
  "19150",
]

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
