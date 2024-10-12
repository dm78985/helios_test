import "@/styles/Header.css"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Navigate to home page"
            width={220}
            height={48}
          />
        </Link>
      </div>
      header
    </header>
  )
}
