export interface Question {
  name: string
  value: string
  type: QuestionType
}

export enum QuestionType {
  RADIO = "radio",
}

export interface ConditionToQuestions {
  [condition: string]: Question[]
}

export enum Conditions {
  GENOVIAN_PEAR = "genovian-pear",
}
