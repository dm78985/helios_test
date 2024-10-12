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

  return navigationLinks.map((navigationLink, index) => (
    <Link href={navigationLink.url} key={`${navigationLink.url}_${index}`}>
      {navigationLink.displayName}
    </Link>
  ))
}
