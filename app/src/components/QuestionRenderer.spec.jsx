import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { QuestionRenderer } from "./QuestionRenderer"
import { conditionToQuestions } from "@/app/api/consultation/questions/[condition]/questions"
import { Conditions } from "@/types"

beforeEach(() => {
  render(
    <QuestionRenderer
      questions={conditionToQuestions[Conditions.GENOVIAN_PEAR]}
      submissionEndpoint=""
      id="123"
    />,
  )
})
test("Initially displays first question", () => {
  const questions = screen.getByTestId(/question_/)

  expect(questions.length).toBe(1)
})

test("Displays second question after selecting answer to first question", () => { })

test("Doesn't submit unless all questions answered", () => { })

test("Successfully submits when all questions answered", () => { })
