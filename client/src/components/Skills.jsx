import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode, FaTools } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-blue-400" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "HTML5 / CSS3", level: 85 },
      ],
    },
    {
      title: "AI & Data Science",
      icon: <FaBrain className="text-cyan-400" />,
      skills: [
        { name: "Pandas & NumPy", level: 80 },
        { name: "Matplotlib & Visualization", level: 75 },
        { name: "Data Preprocessing", level: 80 },
        { name: "Predictive Modeling", level: 70 },
      ],
    },
    {
      title: "Web Frameworks & Style",
      icon: <FaLaptopCode className="text-blue-500" />,
      skills: [
        { name: "React.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Flask / REST APIs", level: 70 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Tools & Design",
      icon: <FaTools className="text-cyan-500" />,
      skills: [
        { name: "Figma (UI & UX Design)", level: 75 },
        { name: "Git & Version Control", level: 70 },
        { name: "VS Code", level: 90 },
        { name: "Wireframing & Prototyping", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-950">
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Technical Skills
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-blue-500 rounded-full" />
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A comprehensive mapping of my technical skillset, focusing on Python development, AI/ML tools, and responsive frontend systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel p-8 rounded-3xl border border-slate-800/80 hover:border-slate-700/60 transition duration-300 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.05)]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800/80">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-slate-300 font-medium group-hover:text-white transition duration-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-semibold text-xs bg-slate-900/60 border border-slate-800/50 px-2 py-0.5 rounded-md">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full bg-slate-900/80 border border-slate-800/50 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
