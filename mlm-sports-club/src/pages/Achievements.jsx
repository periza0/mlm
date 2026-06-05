export default function Achievements() {
  const players = [
    {
      name: "Dhruv Dutta",
      achievements: [
        "International Player",
        "North Zone Champion",
        "SGFI National Winner",
      ],
    },
    {
      name: "Nilesh Seth",
      achievements: [
        "International Player",
        "U-19 North Zone Winner",
        "Punjab State Rank Holder",
        "Best BAI Rank: 15",
        "SGFI National Winner",
      ],
    },
    {
      name: "Kritagya Arora",
      achievements: [
        "Best BAI Rank: 20",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Akhil Arora",
      achievements: [
        "State Winner",
        "Best BAI Rank: 19",
      ],
    },
    {
      name: "Aradhya Singh",
      achievements: [
        "Best BAI Rank: 24",
        "U-15 State Champion",
      ],
    },
    {
      name: "Samaira Arora",
      achievements: [
        "Best BAI Rank: 18",
        "Multiple-Time State Champion",
      ],
    },
    {
      name: "Kaivalya Sood",
      achievements: ["State Runner-Up"],
    },
    {
      name: "Sonakshi",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Aarav Porwal",
      achievements: ["State Runner-Up"],
    },
    {
      name: "Mrinal Khurana",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Ananya Sharma",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Toshan Mehra",
      achievements: ["State Second Runner-Up"],
    },
    {
      name: "Sahib",
      achievements: [
        "Best BAI Rank: 18",
        "Multiple-Time State Champion",
      ],
    },
  ];


  return (
    <section className="relative min-h-screen overflow-hidden px-4 md:px-6 pt-32 pb-16">
      {/* Background Rings */}
      <div className="absolute top-[5%] left-[10%] md:left-[20%] h-[220px] w-[220px] md:h-[420px] md:w-[420px] rounded-full border-[30px] md:border-[55px] border-blue-500/15 blur-[20px]" />

      <div className="absolute top-[25%] left-[15%] md:left-[30%] h-[280px] w-[280px] md:h-[520px] md:w-[520px] rounded-full border-[35px] md:border-[65px] border-blue-600/20 blur-[25px]" />

      <div className="absolute top-[5%] left-[45%] h-[120px] w-[120px] md:h-[220px] md:w-[220px] rounded-full border-[20px] md:border-[45px] border-blue-400/15 blur-[15px]" />

      <div className="absolute bottom-[5%] right-[0%] md:right-[5%] h-[180px] w-[180px] md:h-[350px] md:w-[350px] rounded-full border-[25px] md:border-[50px] border-blue-500/10 blur-[20px]" />

      <div className="absolute top-[10%] right-[-10%] md:right-[-5%] h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full border-[20px] md:border-[40px] border-blue-400/10 blur-[15px]" />

      <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full border-[20px] md:border-[40px] border-blue-400/20 blur-md" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-6 md:p-10 shadow-xl">
          <h1 className="mb-10 text-center text-3xl md:text-5xl font-bold text-[#0b3046]">
            Achievements
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {players.map((player) => (
    <div
      key={player.name}
      className="h-[360px] overflow-hidden rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg"
    >
      {/* Photo Section */}
      <div className="flex h-44 items-center justify-center border-b border-white/20 bg-white/10">
        <span className="text-slate-400">
           Photo Coming Soon
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-3 text-xl font-semibold text-[#0b3046]">
          {player.name}
        </h2>

        <ul className="space-y-1 text-sm text-slate-700">
          {player.achievements.map((achievement) => (
            <li key={achievement}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

{/* And Many More Section */}
<div className="mt-20 text-center">
  <h2 className="text-5xl font-bold text-[#0b3046]">
    And Many More Champions...
  </h2>
</div>
<footer className="py-8 text-center text-slate-500"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
</div>
</div>
</section>
);
}