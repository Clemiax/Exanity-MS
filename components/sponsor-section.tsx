import Image from "next/image"

const sponsors = [{ name: "HMS", logo: "/images/sponsor-1.png" }]

export default function SponsorSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
      <div className="diagonal-lines" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-racing-pattern opacity-5" />

      <div className="container relative z-10">
        <div className="section-card mx-auto max-w-5xl rounded-xl p-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">NOS PARTENAIRES</h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex h-16 w-40 items-center justify-center">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="h-auto max-h-16 w-auto max-w-full opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
