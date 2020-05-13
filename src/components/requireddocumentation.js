import React from "react"
import { Box, Heading, Text } from "rebass"

export const RequiredDocumentation = props => {
  const { answers } = props
  return (
    <Box>
      <Heading fontSize={[3, 4, 5]}>Required Documentation</Heading>
      {answers.involvedWithDHS.answer === "yes" ? (
        <Text mb={4}>
          Before applying for the DHS Prevention Assistance fund, please talk
          with your social worker.
        </Text>
      ) : (
        <></>
      )}
      <Heading fontSize={[2, 3, 4]}>
        What should I bring with me when applying for these resources?
      </Heading>
      <ul>
        <li>Photo ID for all household members age 18 and over</li>
        <li>
          Social Security cards and Birth Certificates for all household members
        </li>
        {answers.monthlyIncome.answer > 0 ? (
          <li>
            Proof of Income dated within last 30 days - Pay stubs (for last
            thirty days) - Employment letter (hours, pay date(s), wages/salary)
            - Award Letter from Social Security office - Any other documentation
            of income
          </li>
        ) : (
          <></>
        )}
        <li>
          Proof of Assets, such as bank statements or inheritance award letters
        </li>
        <li>Lease Agreement</li>
        {answers.needsRentHelp.answer === "yes" ? (
          <li>
            Eviction Notice and/or Court Documents (if seeking assistance for
            back rent)
          </li>
        ) : (
          <></>
        )}
        {answers.isVeteran.answer === "yes" ? (
          <li>Completed DD-214 Form</li>
        ) : (
          <></>
        )}
        {answers.isVeteran.answer === "yes" ? (
          <li>
            State Identification or VA medical card with picture (Identification
            is required for all individuals in the home)
          </li>
        ) : (
          <></>
        )}
        {answers.isVeteran.answer === "yes" ? (
          <li>
            Housing Crisis Documentation. For example, a 10-day Eviction Notice
            or Court Ordered Eviction Notice
          </li>
        ) : (
          <></>
        )}
      </ul>
      {answers.receivedOHSServices.answer === "no" ? (
        <OHSServicesRequiredDocs />
      ) : (
        <></>
      )}
      <Heading fontSize={[1, 2, 3]}>
        What should I get from my landlord?
      </Heading>
      <ul>
        <li>
          Rental License, also called a Housing Inspection License. You can
          lookup your current rental license on the City of Philadelphia's
          website.
        </li>
        <li>
          W-9 signed by landlord. You can find a blank copy of the W9 for your
          landlord to sign here.
        </li>
        {answers.needsRentHelp.answer === "yes" ? (
          <li>
            Letter with current balance owed signed and dated by landlord (if
            seeking assistance for back rent))
          </li>
        ) : (
          <></>
        )}
      </ul>
    </Box>
  )
}

const OHSServicesRequiredDocs = () => {
  return (
    <>
      <Heading fontSize={[1, 2, 3]}>
        If you are applying for assitance to the Office of Homeless Services
      </Heading>
      <ul>
        <li>Documentation from Licensing and Inspections</li>
        <li>Medical and/or mental health documentation</li>
        <li>Unit must pass OHS inspection for private rentals</li>
        <li>
          If subsidized housing, will need HAP contract, lease, or some other
          proof
        </li>
        <li>
          Statement of current balance dated within last 10 days by landlord or
          property manager
        </li>
        <li>Verification of assistance from other agencies if applicable</li>
        <li>
          For security deposit: letter of approval, inspection request, or other
          proof of move-in
        </li>
        <li>Landlord’s contact information</li>
        <li>
          All clients are expected to pay a portion of the move in cost or
          rental balance
        </li>
        <li>
          Documented income must be sufficient to maintain rent and living
          expenses
        </li>
        <li>
          Funds will be issued based on complete application and availability of
          funds
        </li>
        <li>Other requirements may be imposed by intake worker</li>
        <li>
          Final determination made by OHS administrator – not all applications
          accepted/funded
        </li>
      </ul>
    </>
  )
}
