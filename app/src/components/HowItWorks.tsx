import React from "react"

export const HowItWorks = () => {
  const steps = [
    "Find the treatment you require",
    "Start consultation and answer relevant questions",
    "Enter your payment details - you will not be charged at this point",
    "Your answers will be reviewed by a medical expert",
    "If approved your card will be charged and the medicine dispatched",
  ]

  return (
    <React.Fragment>
      <h2>How it works</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={`step_${index}`}>{step}</li>
        ))}
      </ol>
    </React.Fragment>
  )
}
