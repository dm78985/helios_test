import React from "react"
import { Question as QuestionInterface, QuestionType } from "@/types"

interface QuestionProps {
  question: QuestionInterface
  onChangeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Question = (props: QuestionProps) => {
  switch (props.question.type) {
    case QuestionType.RADIO: {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    }
    case QuestionType.NUMBER: {
      return (
        <input
          type={props.question.type}
          name={props.question.name}
          onChange={props.onChangeCallback}
          id={props.question.name}
          required
        />
      )
    }
    default:
      return <p>type not implemented</p>
  }
}
