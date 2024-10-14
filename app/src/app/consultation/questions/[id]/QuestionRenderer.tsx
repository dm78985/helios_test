"use client"

import React from "react"
import { Question } from "@/types"
import siteDefinition from "@/siteDefinition.json"
import { useRouter } from "next/navigation"

interface QuestionRendererProps {
  questions: Question[]
  submissionEndpoint: string
  id: string
}

export type Answers = { [question: string]: string }

export const QuestionRenderer = (props: QuestionRendererProps) => {
  const [highestVisibleQuestion, setHighestVisibleQuestion] = React.useState(0)
  const [answers, setAnswers] = React.useState<Answers>({})
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    answers[name] = value
    setAnswers(answers)

    if (Object.keys(answers).length > highestVisibleQuestion) {
      setHighestVisibleQuestion(highestVisibleQuestion + 1)
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch(`${siteDefinition.originUrl}${props.submissionEndpoint}`, {
      method: "POST",
      body: JSON.stringify({ answers, id: props.id }),
    })
      .then((response) => {
        if (!response.ok || response.status !== 201) {
          return router.push("/consultation/submission/error")
        }
        router.push("/consultation/submission/success")
      })
      .catch(() => {
        router.push("/consultation/submission/error")
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
