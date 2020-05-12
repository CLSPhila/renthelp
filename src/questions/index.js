import React from "react"
import { TextField } from "../components/questiontype/textfield"
import { Box, Button } from "rebass"
import { ButtonOptionsField } from "../components/questiontype/buttonOptionField"
import { CheckBoxField } from "../components/questiontype/checkBoxField"
export const UserName = props => {
  return (
    <Box>
      Please enter your full name.
      <TextField labelText="Your full name" {...props} />
    </Box>
  )
}

export const ZipCode = props => {
  return (
    <Box>
      What is your zip code?
      <TextField labelText="Zip code" {...props} />
    </Box>
  )
}

export const IsRenter = props => {
  return (
    <Box>
      Are you a renter?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No, I am not.
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const SecDeposit = props => {
  return (
    <Box>
      Are you looking for help with a security deposit or with back rent?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No, I am not.
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const BackRent = props => {
  return (
    <Box>
      Are you looking for help with back rent?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No, I am not.
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const RentalHousingType = props => {
  return (
    <Box>
      Do you live in private housing or subsidized/public housing?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="private" value="private">
          Private housing
        </Button>
        <Button variant="secondary" key="public" value="public">
          Public housing.
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const WestPhilly = props => {
  return (
    <Box>
      Do you live between 52nd and 67th Street and Girard to Baltimore Ave?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No, I do not.
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const YearsAtAddress = props => {
  return (
    <Box>
      How long have you lived at your current address?
      <TextField labelText="Years" {...props} />
    </Box>
  )
}

export const LeaseStart = props => {
  return (
    <Box>
      When did your lease begin at your current address?
      <TextField labelText="Years" {...props} />
    </Box>
  )
}

export const LeaseEnd = props => {
  return (
    <Box>
      When did your lease end at your current address?
      <TextField labelText="Years" {...props} />
    </Box>
  )
}

export const NumInHousehold = props => {
  return (
    <Box>
      How many people live in your household?
      <TextField labelText="Adults and children" {...props} />
    </Box>
  )
}

export const HowOldAreYou = props => {
  return (
    <Box>
      What is your age in years?
      <TextField labelText="Years" {...props} />
    </Box>
  )
}

export const MonthlyIncome = props => {
  return (
    <Box>
      What is your monthly income?
      <TextField labelText="Monthly Income" {...props} />
    </Box>
  )
}

export const Veteran = props => {
  return (
    <Box>
      Are you or a member of your household a U.S. Military veteran?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const InvolvedWithDHS = props => {
  return (
    <Box>
      Are you involved with DHS?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const ReceivedOHSServices = props => {
  return (
    <Box>
      Have you received rental assistance from the Office of Homeless Services
      in the last year?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const ReceivedCAOServices = props => {
  return (
    <Box>
      Have you received rental assistance from the County Assistance Office in
      the past 12 months?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const IsImmigrant = props => {
  return (
    <Box>
      Are you an immigrant, refugee or asylum seeker?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}

export const ExperiencedDisaster = props => {
  return (
    <Box>
      Have you been in a fire or some other disaster at your home?
      <ButtonOptionsField {...props}>
        <Button variant="secondary" key="yes" value="yes">
          Yes
        </Button>
        <Button variant="secondary" key="no" value="no">
          No
        </Button>
      </ButtonOptionsField>
    </Box>
  )
}
