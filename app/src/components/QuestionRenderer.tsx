"use client"

import React from "react"
import { Question } from "@/types"
import { redirect } from "next/navigation"
import siteDefinition from "@/siteDefinition.json"

interface QuestionRendererProps {
  questions: Question[]
  submissionEndpoint: string
  id: string
}

export type Answers = { [question: string]: string }

export const QuestionRenderer = (props: QuestionRendererProps) => {
  const [highestVisibleQuestion, setHighestVisibleQuestion] = React.useState(0)
  const [answers, setAnswers] = React.useState<Answers>({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log("handling change", name, value)
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }))

    if (highestVisibleQuestion < props.questions.length) {
      setHighestVisibleQuestion(highestVisibleQuestion + 1)
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch(
      `${siteDefinition.originUrl}${props.submissionEndpoint}/${props.id}`,
      { method: "POST", body: JSON.stringify(answers) },
    )
      .then((response) => {
        console.log("response ok", response.ok)
        if (!response.ok) {
          redirect(`${siteDefinition.originUrl}/consultation/submission/error`)
        }
        redirect(`${siteDefinition.originUrl}/consultation/submission/success`)
      })
      .catch((e) => {
        console.log("error", e)
        redirect("/consultation/submission/error")
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.questions.reduce<React.ReactNode[]>(
        (questionsToShow, question, index) => {
          if (index > highestVisibleQuestion) {
            return questionsToShow
          }
          questionsToShow.push(
            <div key={`question_${index}`}>
              <h3>{question.value}</h3>
              <label htmlFor="yes">Yes</label>
              <input
                type={question.type}
                name={question.name}
                required
                id="yes"
                value="yes"
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
              <input
                type={question.type}
                name={question.name}
                required
                id="no"
                value="no"
                onChange={handleChange}
              />
            </div>,
          )
          return questionsToShow
        },
        [],
      )}
      <input type="submit" value="Submit" />
    </form>
  )
}
