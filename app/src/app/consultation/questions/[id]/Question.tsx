"use client"

import { Question as QuestionInterface, QuestionType } from "@/types"

interface QuestionProps {
  question: QuestionInterface
  key: string
  onChangeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Question(props: QuestionProps) {
  switch (props.question.type) {
    case QuestionType.RADIO: {
      return (
        <div key={props.key}>
          <h3>{props.question.value}</h3>
          <label htmlFor="yes">Yes</label>
          <input
            type={props.question.type}
            name={props.question.name}
            required
            id="yes"
            value="yes"
            onChange={props.onChangeCallback}
          />
          <label htmlFor="no">No</label>
          <input
            type={props.question.type}
            name={props.question.name}
            required
            id="no"
            value="no"
            onChange={props.onChangeCallback}
          />
        </div>
      )
    }
    default: {
      return <strong>Question type not implemented</strong>
    }
  }
}
