import { Conditions, ConditionToQuestions, QuestionType } from "@/types"

export const conditionToQuestions: ConditionToQuestions = {
  [Conditions.GENOVIAN_PEAR]: [
    {
      value: "How tall are you?",
      type: QuestionType.NUMBER,
      name: "height",
    },
    {
      value: "Are you between the ages of 18 and 74?",
      type: QuestionType.RADIO,
      name: "ageRange",
    },
    {
      value: "Have you had a previous reaction after eating Genovian pears?",
      type: QuestionType.RADIO,
      name: "previousReaction",
    },
    {
      value: "Are you pregnant or trying to conceive?",
      type: QuestionType.RADIO,
      name: "pregnant",
    },
    {
      value: "Do you have a family history of Genovian pear allergies?",
      type: QuestionType.RADIO,
      name: "familyHistory",
    },
    {
      value: "Do you suffer from any heart conditions?",
      type: QuestionType.RADIO,
      name: "heartCondition",
    },
  ],
}
