export interface Question {
  value: string
  type: QuestionType
}

export enum QuestionType {
  RADIO,
}

export interface ConditionToQuestions {
  [condition: string]: Question[]
}

export enum Conditions {
  GENOVIAN_PEAR = "genovian-pear",
}
