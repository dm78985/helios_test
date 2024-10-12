"use client"

import React from "react"
import { Question } from "@/types"

interface QuestionRendererProps {
  questions: Question[]
}
export const QuestionRenderer = (props: QuestionRendererProps) => {
  const [highestVisibleQuestion, setHighestVisibleQuestion] = React.useState(0)

  return (
    <form>
      {props.questions.map((question, index) => (
        <div key={`question_${index}`}>
          <label for="id">{question.value}</label>
          <input type={question.type} name={question.value} required={true} />
          <br />
        </div>
      ))}
    </form>
  )
}
