import Link from "next/link"
import "@/styles/Navigation.css"

interface NavigationLink {
  displayName: string
  url: string
}

export const Navigation = () => {
  const navigationLinks: NavigationLink[] = [
    { displayName: "Treatments", url: "/treatments" },
  ]

  return (
    <ul>
      {navigationLinks.map((navigationLink, index) => (
        <li key={`${navigationLink.url}_${index}`}>
          <Link href={navigationLink.url}>{navigationLink.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}
