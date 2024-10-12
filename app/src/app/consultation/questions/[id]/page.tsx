interface ConsultationPageProps {
  params: { [parameter: string]: string }
  searchParams: { [parameter: string]: string | undefined }
}
export default async function ConsultationPage(props: ConsultationPageProps) {
  return <h1>Consultation for {props.searchParams.condition}</h1>
}
