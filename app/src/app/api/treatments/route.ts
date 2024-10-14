import { conditionToQuestions } from "../consultation/questions/[condition]/questions"

export async function GET() {
  return new Response(JSON.stringify(Object.keys(conditionToQuestions)), {
    status: 200,
  })
}
