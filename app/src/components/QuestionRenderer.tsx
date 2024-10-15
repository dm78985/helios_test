"use client"

import React from "react"
import { Question as QuestionType } from "@/types"
import siteDefinition from "@/siteDefinition.json"
import { useRouter } from "next/navigation"
import { Question } from "./Question"

interface QuestionRendererProps {
  questions: QuestionType[]
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

    console.log("answers", answers)
    console.log("highestVisibleQuestion", highestVisibleQuestion)
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
          return router.push(`/consultation/submission/error`)
        }
        router.push(`/consultation/submission/success`)
      })
      .catch(() => {
        router.push(`/consultation/submission/error`)
      })
  }

  const totalNumberQuestions = props.questions.length
  return (
    <form onSubmit={handleSubmit}>
      {props.questions.reduce<React.ReactNode[]>(
        (questionsToShow, question, index) => {
          if (index > highestVisibleQuestion) {
            return questionsToShow
          }
          questionsToShow.push(
            <div key={`question_${index}`}>
              <h3>
                Question {index + 1}/{totalNumberQuestions}: {question.value}
              </h3>
              <Question question={question} onChangeCallback={handleChange} />
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
