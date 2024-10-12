import { Conditions, ConditionToQuestions, QuestionType } from "@/types"

export const conditionToQuestions: ConditionToQuestions = {
  [Conditions.GENOVIAN_PEAR]: [
    {
      value: "Are you between the ages of 18 and 74?",
      type: QuestionType.RADIO,
    },
    {
      value: "Have you had a previous reaction after eating Genovian pears?",
      type: QuestionType.RADIO,
    },
    {
      value: "Are you pregnant or trying to conceive?",
      type: QuestionType.RADIO,
    },
    {
      value: "Do you have a family history of Genovian pear allergies?",
      type: QuestionType.RADIO,
    },
    {
      value: "Do you suffer from any heart conditions?",
      type: QuestionType.RADIO,
    },
  ],
}
