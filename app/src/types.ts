export interface Question {
  name: string
  value: string
  type: QuestionType
}

export enum QuestionType {
  RADIO = "radio",
}

export enum Conditions {
  GENOVIAN_PEAR = "genovian-pear",
  BEET_ALLERGY = "beets",
}
