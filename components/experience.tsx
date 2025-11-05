"use client"



export default function Experience() {
  return (
 <section
        id="experience"
        className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 bg-[#0a0a0a] text-white"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff004f] font-semibold mb-2">My Abilities</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">My Experience</h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
          {/* ===== Left Column ===== */}
          <div className="space-y-10">
            {/* Frontend Developer */}
            <div className="flex items-start gap-4">
              <div className="text-[#ff004f] text-2xl">{`{}`}</div>
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-400 text-sm">More than 2 years</p>
              </div>
            </div>

            {/* UI/UX Designer */}
            <div className="flex items-start gap-4">
              <div className="text-[#ff004f] text-2xl">📘</div>
              <div>
                <h3 className="text-xl font-semibold">UI / UX Design</h3>
                <p className="text-gray-400 text-sm">More than 1 year</p>
              </div>
            </div>

            {/* Backend Developer */}
            <div className="flex items-start gap-4">
              <div className="text-[#ff004f] text-2xl">💻</div>
              <div>
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <p className="text-gray-400 text-sm">1 year </p>
              </div>
            </div>
          </div>

          {/* ===== Right Column (Skill Bars) ===== */}
          <div className="space-y-8">
            {/* Skill Item */}
            {[
              { name: "Next.js", level: 70 },
              { name: "React", level: 80 },
              { name: "Node.js", level: 75 },
              { name: "Tailwind CSS", level: 85 },
              { name: "Shadcn/ui", level: 65 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#ff004f] font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-[#ff004f] rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
};
   