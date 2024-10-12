import { notFound } from "next/navigation"
import siteDefinition from "@/siteDefinition.json"

interface ConsultationPageProps {
  params: { [parameter: string]: string }
  searchParams: { [parameter: string]: string | undefined }
}
export default async function ConsultationPage(props: ConsultationPageProps) {
  if (!props.searchParams.condition) {
    notFound()
  }

  const response = await fetch(
    `${siteDefinition.originUrl}/api/consultation/questions/${props.searchParams.condition}`,
  )

  if (!response.ok) {
    notFound()
  }
  const questions = await response.json()

  return (
    <div>
      <h1>Consultation for {props.searchParams.condition}</h1>
      <Questions questions={questions} />
    </div>
  )
}
