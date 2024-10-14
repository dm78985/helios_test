import Link from "next/link"
import siteDefinition from "@/siteDefinition.json"
import { notFound } from "next/navigation"
import "./styles.css"

export default async function Treatments() {
  const treamentsAvailable = await fetch(
    `${siteDefinition.originUrl}/api/treatments`,
  )

  if (!treamentsAvailable.ok) {
    return notFound()
  }

  const treatments = await treamentsAvailable.json()

  return (
    <div>
      <h1>Treatments</h1>
      <ul className="treatments">
        {treatments.map((treatment: string) => (
          <li key={treatment}>
            <Link className="treatment" href={`/treatments/${treatment}`}>
              {treatment}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
