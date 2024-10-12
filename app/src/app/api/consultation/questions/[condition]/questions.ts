import { Conditions, ConditionToQuestions } from "@/types"

export const conditionToQuestions: ConditionToQuestions = {
  [Conditions.GENOVIAN_PEAR]: [
    { value: "Are you between the ages of 18 and 74?" },
    { value: "Have you had a previous reaction after eating Genovian pears?" },
    { value: "Are you pregnant or trying to conceive?" },
    { value: "Do you have a family history of Genovian pear allergies?" },
    { value: "Do you suffer from any heart conditions?" },
  ],
}
