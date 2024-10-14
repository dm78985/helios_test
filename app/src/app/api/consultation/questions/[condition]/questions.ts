import { Conditions, Question, QuestionType } from "@/types"

export const conditionToQuestions: Record<Conditions, Question[]> = {
  [Conditions.GENOVIAN_PEAR]: [
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
  [Conditions.BEET_ALLERGY]: [
    {
      value: "Are you pregnant or trying to conceive?",
      type: QuestionType.RADIO,
      name: "pregnant",
    },
    {
      value: "Black bears are the best type of bear?",
      type: QuestionType.RADIO,
      name: "blackBear",
    },
    {
      value:
        "Battlestar galactica is the greatest television series of our time?",
      type: QuestionType.RADIO,
      name: "battlestarGalactica",
    },
  ],
}
