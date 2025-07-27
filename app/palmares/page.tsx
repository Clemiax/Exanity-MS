const results = [
  {
    id: 1,
    title: "CFE 2024-2025",
    category: "GT AM - CORVETTE GT3",
    position: "🥉 - P3 GT AM",
    description: "CFE 2024-2025, Catégorie GT AM.",
    team: ["Clément BOUTLEUX", "Hugo FOYART", "Vincent JOLTOK", "Martin GACHON"],
    // Pas de split ni de stats pour ce résultat
  },
  {
    id: 2,
    title: "6 Heures de Spa",
    category: "GTP - IMSA",
    split: "SPLIT 4",
    position: "🥇 - P1",
    description: "Championnat Global Endurance Tour, 2025 S1.",
    team: ["Clément BOUTLEUX", "Hugo FOYART", "Vincent JOLTOK"],
    stats: {
      laps: 177,
      bestLap: "1:57.716",
      leadLaps: 81,
    },
  },
  {
    id: 3,
    title: "6 Heures du Mans",
    category: "GTP - IMSA",
    split: "SPLIT 3",
    position: "🥈 - P2",
    description: "Championnat Global Endurance Tour, 2025 S1.",
    team: ["Martin GACHON", "Hugo FOYART", "Vincent JOLTOK"],
    stats: {
      laps: 104,
      bestLap: "3:20.048",
      leadLaps: 0,
    },
  },
]

export default function PalmaresPage() {
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
                NOTRE <span className="text-primary">PALMARÈS</span>
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl">
                Découvrez les performances et résultats d'Exanity Motorsport dans les différentes compétitions et
                championnats iRacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-gradient-racing" />

      {/* Results Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-racing-pattern opacity-5" />
        <div className="diagonal-lines" />

        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <div key={result.id} className="overflow-hidden rounded-lg shadow-lg section-card">
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <div className="inline-block rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
                      {result.category}
                    </div>
                    {result.split && (
                      <div className="inline-block rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
                        {result.split}
                      </div>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{result.title}</h3>
                  <div className="mb-4 text-xl font-bold text-primary">{result.position}</div>
                  <p className="mb-4 text-sm text-gray-300">{result.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-white">Équipage:</h4>
                    <div className="flex flex-wrap gap-1">
                      {result.team.map((driver, index) => (
                        <span key={index} className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-gray-300">
                          {driver}
                        </span>
                      ))}
                    </div>
                  </div>

                  {result.stats && (
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      {Object.entries(result.stats).map(([key, value], index) => (
                        <div key={index}>
                          <span className="text-gray-500">
                            {key === "leadLaps"
                              ? "Tours en tête"
                              : key === "laps"
                                ? "Tours"
                                : key === "bestLap"
                                  ? "Meilleur tour"
                                  : key === "points"
                                    ? "Points"
                                    : key === "wins"
                                      ? "Victoires"
                                      : key === "podiums"
                                        ? "Podiums"
                                        : key}
                            :
                          </span>
                          <span className="ml-1 block text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider bg-gradient-racing" />

      {/* Season Stats Section */}
      <section className="relative overflow-hidden bg-gradient-racing py-16 text-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-racing-pattern opacity-5" />
        <div className="diagonal-lines" />

        <div className="container relative z-10">
          <div className="section-card mx-auto max-w-4xl rounded-xl p-8">
            <h2 className="mb-10 text-3xl font-bold text-white">
              STATISTIQUES <span className="text-primary">2025</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300">
                <div className="text-4xl font-bold text-primary">1</div>
                <div className="text-lg text-white">Victoires</div>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300">
                <div className="text-4xl font-bold text-primary">3</div>
                <div className="text-lg text-white">Podiums</div>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300">
                <div className="text-4xl font-bold text-primary">1</div>
                <div className="text-lg text-white">Championnats</div>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300">
                <div className="text-4xl font-bold text-primary">3+</div>
                <div className="text-lg text-white">Endurances</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
