import Image from "next/image"

const drivers = [
  {
    id: 1,
    name: "Clément B.",
    role: "Fondateur / Pilote",
    image: "/images/pp_clement.jpeg",
  },
  {
    id: 2,
    name: "Vincent J.",
    role: "Pilote",
    image: "/images/pp_vincent.jpg",
  },
  {
    id: 3,
    name: "Jeremy M.",
    role: "Pilote",
    image: "/images/pp_jeremy.png",
  },
  {
    id: 4,
    name: "Hugo F.",
    role: "Pilote",
    image: "/images/IMG_7383.png",
  },
  {
    id: 5,
    name: "Martin G.",
    role: "Pilote",
    image: "/images/pp_martin.jpg",
  },
  {
    id: 6,
    name: "Thibault D.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 7,
    name: "Julien G.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 8,
    name: "Rémi L.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 9,
    name: "Benoît E.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 10,
    name: "Hugo M.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 11,
    name: "Corentin C.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 12,
    name: "Stann O.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
  {
    id: 13,
    name: "Laurent D.",
    role: "Pilote",
    image: "/images/pp_exanity.png",
  },
]

export default function PilotesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16 md:pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-racing" />
        <div className="hero-glow" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-racing-pattern opacity-5" />
        <div className="diagonal-lines" />

        <div className="container relative z-10">
          <div className="section-card mx-auto max-w-3xl rounded-xl p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                NOS <span className="text-primary">PILOTES</span>
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl">
                Découvrez l'équipe Exanity Motorsport, composée de pilotes passionnés et talentueux qui représentent
                notre écurie dans les compétitions iRacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-gradient-racing" />

      {/* Drivers Grid Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-racing-pattern opacity-5" />
        <div className="diagonal-lines" />

        <div className="container relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {drivers.map((driver) => (
              <div
                key={driver.id}
                className="group overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-sm section-card"
              >
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <Image
                    src={driver.image || "/placeholder.svg"}
                    alt={driver.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white">{driver.name}</h3>
                  <p className="text-gray-400">{driver.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
