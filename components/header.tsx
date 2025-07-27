"use client"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "ACCUEIL", href: "/" },
  { name: "PILOTES", href: "/pilotes" },
  { name: "PALMARÈS", href: "/palmares" },
  { name: "DISCORD", href: "/discord" },
]

// Liens des réseaux sociaux
const socialLinks = {
  twitch: "https://www.twitch.tv/exanitymotorsport",
  facebook: "https://www.facebook.com/ExanityMS",
  instagram: "https://www.instagram.com/exanityms/",
}

export default function Header() {
  const isMobile = useMobile()

  // Version simplifiée du header sur mobile avec uniquement le logo
  if (isMobile) {
    return (
      <header className="fixed left-0 right-0 top-0 z-50 bg-black/90 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-center h-16">
          <Link href="/" className="relative z-10">
            <Image src="/images/logo.png" alt="Exanity Motorsport" width={40} height={40} className="h-10 w-auto" />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed left-0 top-0 z-50 h-full w-20 bg-black/80 backdrop-blur-sm">
      <div className="flex h-full flex-col items-center justify-between py-6">
        <Link href="/" className="relative z-10">
          <Image src="/images/logo.png" alt="Exanity Motorsport" width={60} height={60} className="h-12 w-auto" />
        </Link>

        <nav className="flex-1 py-10">
          <ul className="flex flex-col items-center space-y-10">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.href} className="flex flex-col items-center">
                  <span className="text-sm font-medium text-white hover:text-primary vertical-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col space-y-4">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Instagram size={18} />
            </Button>
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Facebook size={18} />
            </Button>
          </a>
          <a href={socialLinks.twitch} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Twitch size={18} />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
