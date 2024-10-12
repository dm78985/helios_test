import { HowItWorks } from "@/components/HowItWorks"
import "@/styles/ConditionPage.css"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"

interface ConditionPageProps {
  params: { [parameter: string]: string }
}
export default async function ConditionPage(props: ConditionPageProps) {
  const { condition } = props.params

  const id = uuidv4()
  return (
    <div>
      <h1>{condition}</h1>
      <HowItWorks />
      <h2>Ready?</h2>
      <Link href={`/consultation/questions/${id}`} className="styledLink">
        Start consultation
      </Link>
    </div>
  )
}
