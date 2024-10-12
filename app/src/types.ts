export interface Question {
  value: string
}

export interface ConditionToQuestions {
  [condition: string]: Question[]
}

export enum Conditions {
  GENOVIAN_PEAR = "genovian-pear",
}
