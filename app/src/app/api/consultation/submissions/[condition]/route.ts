import type { NextApiRequest } from "next"

export async function POST(
  req: NextApiRequest,
  { params }: { params: { [parameter: string]: string | undefined } },
) {
  if (!params.condition) {
    return new Response(null, { status: 404 })
  }

  const requestBody = await req.json()
  if (!requestBody.id || !requestBody.answers) {
    return new Response(null, { status: 404 })
  }

  console.log("data to send to api", requestBody)
  return new Response(null, { status: 201 })
}
