import { conditionToQuestions } from "./questions"

export async function GET(
  _req: Request,
  { params }: { params: { [parameter: string]: string | undefined } },
) {
  if (!params.condition) {
    return new Response(null, { status: 404 })
  }

  if (conditionToQuestions[params.condition]) {
    return new Response(
      JSON.stringify(conditionToQuestions[params.condition]),
      {
        status: 200,
      },
    )
  }
}
