import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaWaveSquare, FaGamepad, FaLaptopCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Sea Level Prediction System",
      description:
        "Developed a machine learning model to predict future sea levels using historical climate data. Built Flask REST APIs to serve model predictions and integrated with a responsive React frontend for data charts.",
      tech: ["Python", "Machine Learning", "Flask", "React", "MongoDB"],
      github:"https://github.com/Janufa/Coastal_disaster_prediction_analysis/",
      demo: "https://coastaldisasteranalysis.netlify.app/",
      icon: <FaWaveSquare className="text-blue-400" />,
      color: "from-blue-500/10 to-cyan-500/5",
    },
    {
      title: "Python Quiz Game",
      description:
        "Designed and developed an interactive desktop and web-based quiz game. Developed scoring logic with timed questions, user-friendly forms, and dynamic scoreboard displays utilizing Tkinter and Flask.",
      tech: ["Python", "Tkinter", "Flask", "HTML5", "CSS3"],
      github: "https://github.com/Rishika05012005/",
      demo: "#",
      icon: <FaGamepad className="text-cyan-400" />,
      color: "from-cyan-500/10 to-teal-500/5",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and built this high-fidelity personal portfolio showing a dark-mode theme, sleek glassmorphic components, glowing accents, and a fully connected contact notification Express API.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "Nodemailer"],
      github: "https://github.com/Rishika05012005/",
      demo: "#",
      icon: <FaLaptopCode className="text-indigo-400" />,
      color: "from-indigo-500/10 to-blue-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-950/40">
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Projects
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-blue-500 rounded-full" />
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent full-stack software, machine learning predictions, and desktop utility development.
          </p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transform hover:-translate-y-1.5"
            >
              {/* Card Header & Body */}
              <div className="p-8">
                {/* Decorative Icon Area */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center border border-white/5 mb-6 text-2xl shadow-inner`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition duration-300 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-8 pb-8 pt-0 mt-auto">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800/80 px-2.5 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition duration-300 flex items-center justify-center gap-1.5"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition duration-300 glowing-btn-blue flex items-center justify-center gap-1.5"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
