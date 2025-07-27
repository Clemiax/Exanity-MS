import { Button } from "@/components/ui/button"
import { DiscIcon as Discord } from "lucide-react"

export default function DiscordPage() {
  // Remplacez cette URL par l'URL de votre serveur Discord
  const discordInviteUrl = "https://discord.gg/XH3mQKK"

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16 md:pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-racing" />
        <div className="hero-glow" />

        {/* Diagonal lines */}
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
        <div className="diagonal-lines" />

        <div className="container relative z-10">
          <div className="section-card mx-auto max-w-4xl rounded-xl p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-8 flex items-center justify-center">
                <Discord size={60} className="text-primary" />
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                REJOIGNEZ NOTRE <span className="text-primary">STRUCTURE</span>
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl">
                Notre serveur Discord est le centre névralgique de l'équipe. C'est là que nous organisons nos courses,
                partageons nos conseils, recrutons de nouveaux pilotes et créons une véritable communauté de passionnés.
              </p>

              <div className="flex flex-col items-center space-y-8">
                <Button size="lg" className="bg-[#5865F2] text-white hover:bg-[#5865F2]/90" asChild>
                  <a
                    href={discordInviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Discord size={24} />
                    REJOINDRE LE SERVEUR
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-gradient-racing" />

      {/* Features Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-racing-pattern opacity-5" />
        <div className="diagonal-lines" />

        <div className="container relative z-10">
          <div className="section-card mx-auto max-w-5xl rounded-xl p-8">
            <h2 className="mb-6 text-2xl font-bold text-white text-center">CE QUE VOUS TROUVEREZ SUR NOTRE DISCORD</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-lg bg-zinc-800/50 p-6 text-center hover:bg-zinc-800/70 transition-all duration-300">
                <h3 className="mb-2 text-xl font-semibold text-primary">Recrutement</h3>
                <p className="text-gray-300">
                  Postulez pour rejoindre notre équipe et participez à nos courses de sélection.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-zinc-800/50 p-6 text-center hover:bg-zinc-800/70 transition-all duration-300">
                <h3 className="mb-2 text-xl font-semibold text-primary">Événements</h3>
                <p className="text-gray-300">Calendrier des courses, entraînements et championnats à venir.</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-zinc-800/50 p-6 text-center hover:bg-zinc-800/70 transition-all duration-300">
                <h3 className="mb-2 text-xl font-semibold text-primary">Conseils & Réglages</h3>
                <p className="text-gray-300">Partagez et accédez à des setups optimisés et des conseils de pilotage.</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-zinc-800/50 p-6 text-center hover:bg-zinc-800/70 transition-all duration-300">
                <h3 className="mb-2 text-xl font-semibold text-primary">Travail d'Équipe</h3>
                <p className="text-gray-300">
                  Discutez avec d'autres passionnés de SimRacing et participez aux performances de l'équipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
