"use client"

import React from "react"
import { Question as QuestionInterface, QuestionType } from "@/types"
import "./styles.css"

interface QuestionProps {
  question: QuestionInterface
  onChangeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Question(props: QuestionProps) {
  switch (props.question.type) {
    case QuestionType.RADIO: {
      return (
        <div className="radioButtonContainer">
          <input
            type={props.question.type}
            name={props.question.name}
            required
            id={`${props.question.name}_yes`}
            value="yes"
            onChange={props.onChangeCallback}
          />
          <label htmlFor={`${props.question.name}_yes`} className="radioButton">
            Yes
          </label>
          <input
            type={props.question.type}
            name={props.question.name}
            required
            id={`${props.question.name}_no`}
            value="no"
            onChange={props.onChangeCallback}
          />
          <label htmlFor={`${props.question.name}_no`} className="radioButton">
            No
          </label>
        </div>
      )
    }
    case QuestionType.TEXT: {
      return (
        <input
          required
          type={props.question.type}
          id={props.question.name}
          name={props.question.name}
          onChange={props.onChangeCallback}
        />
      )
    }
    default: {
      return <strong>Question type not implemented</strong>
    }
  }
}
