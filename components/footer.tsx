import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitch } from "lucide-react"
import { Button } from "@/components/ui/button"

// Liens des réseaux sociaux
const socialLinks = {
  twitch: "https://www.twitch.tv/exanitymotorsport",
  facebook: "https://www.facebook.com/ExanityMS",
  instagram: "https://www.instagram.com/exanityms/",
}

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 py-12">
      <div className="absolute inset-0 bg-racing-pattern opacity-5" />
      <div className="diagonal-lines" />

      <div className="container relative z-10">
        <div className="mb-8 flex flex-col items-center justify-center gap-8">
          <Link href="/" className="transition-transform hover:scale-105">
            <Image src="/images/logo.png" alt="Exanity Motorsport" width={80} height={80} className="h-16 w-auto" />
          </Link>

          <div className="flex space-x-4">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:scale-110 transition-all"
              >
                <Instagram size={20} />
              </Button>
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:scale-110 transition-all"
              >
                <Facebook size={20} />
              </Button>
            </a>
            <a href={socialLinks.twitch} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:scale-110 transition-all"
              >
                <Twitch size={20} />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Exanity Motorsport. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
