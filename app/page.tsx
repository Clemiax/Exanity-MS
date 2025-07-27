import Link from "next/link"
import { Button } from "@/components/ui/button"
import SponsorSection from "@/components/sponsor-section"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-48">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-racing" />
        <div className="hero-glow" />

        {/* Animated diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-0 h-[800px] w-[2px] rotate-[20deg] bg-primary floating-element" />
          <div className="absolute -left-10 top-0 h-[600px] w-[1px] rotate-[20deg] bg-primary pulsing-element" />
          <div
            className="absolute left-1/4 top-0 h-[900px] w-[2px] rotate-[20deg] bg-primary floating-element"
            style={{ animationDelay: "-2s" }}
          />
          <div
            className="absolute left-1/3 top-0 h-[700px] w-[1px] rotate-[20deg] bg-primary pulsing-element"
            style={{ animationDelay: "-1s" }}
          />
          <div
            className="absolute left-2/3 top-0 h-[800px] w-[2px] rotate-[20deg] bg-primary floating-element"
            style={{ animationDelay: "-3s" }}
          />
          <div
            className="absolute right-1/4 top-0 h-[600px] w-[1px] rotate-[20deg] bg-primary pulsing-element"
            style={{ animationDelay: "-2.5s" }}
          />
          <div
            className="absolute -right-10 top-0 h-[900px] w-[2px] rotate-[20deg] bg-primary floating-element"
            style={{ animationDelay: "-1.5s" }}
          />
        </div>

        {/* Geometric shapes */}
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full border border-zinc-800 opacity-20 floating-element" />
        <div
          className="absolute right-20 top-40 h-60 w-60 rounded-full border border-zinc-800 opacity-10 floating-element"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full border border-zinc-800 opacity-15 floating-element"
          style={{ animationDelay: "-1.5s" }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-racing-pattern opacity-5" />

        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="text-primary">PERFORMANCE</span> ET <span className="block text-primary">PASSION</span>{" "}
              SIM RACING
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl">
              Avec notre équipe de pilotes passionnés, nous visons à devenir une référence dans le domaine du SimRacing.
              Nous prônons des valeurs d'entraide, de respect et de plaisir, et sommes fiers de représenter la
              communauté iRacing avec excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/pilotes">DÉCOUVRIR L'ÉQUIPE</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/palmares">VOIR NOS RÉSULTATS</Link>
              </Button>
            </div>

            <div className="mt-16 animate-bounce">
              <ChevronDown className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-gradient-racing" />

      {/* Sponsors Section */}
      <SponsorSection />
    </main>
  )
}
