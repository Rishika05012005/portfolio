import { motion } from "framer-motion";
import { FaCertificate, FaMedal, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Python Programming",
      issuer: "CSE Training Center",
      date: "Completed: 2024",
      grade: "Grade: Distinction",
      description: "Advanced Python syntax, object-oriented concepts, algorithms, and application implementation.",
      icon: <FaMedal className="text-amber-400" />,
      credentialUrl: "#",
    },
    {
      title: "Machine Learning & Data Analysis",
      issuer: "AI Research Academy",
      date: "Completed: 2025",
      grade: "Grade: A+",
      description: "Data exploration, supervised and unsupervised ML modeling, model evaluations, and mathematical algorithms.",
      icon: <FaCertificate className="text-cyan-400" />,
      credentialUrl: "#",
    },
    {
      title: "Neural Networks & Deep Learning",
      issuer: "Cognitive Tech Institute",
      date: "Completed: 2025",
      grade: "Credential Verified",
      description: "Foundational elements of deep neural networks, optimizer methods, weight modeling, and NLP applications.",
      icon: <FaCertificate className="text-blue-400" />,
      credentialUrl: "#",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative bg-slate-950">
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Certifications
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-blue-500 rounded-full" />
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            My accredited technical certifications validating my Python fluency, machine learning understanding, and software architectures.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-8 rounded-3xl border border-slate-800/80 hover:border-slate-700/60 transition duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] relative overflow-hidden group"
            >
              {/* Card Body */}
              <div>
                {/* Header Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl bg-slate-900/60 border border-slate-800/60 p-3 rounded-2xl">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest bg-slate-900/80 border border-slate-800/50 px-2.5 py-1 rounded-full">
                    Official
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition duration-300">
                  {cert.title}
                </h3>
                <p className="text-slate-300 font-medium text-xs mb-1">{cert.issuer}</p>
                <div className="flex gap-3 text-[10px] text-slate-500 font-semibold mb-4">
                  <span>{cert.date}</span>
                  <span>•</span>
                  <span className="text-cyan-400/80">{cert.grade}</span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Card Action */}
              <div className="mt-auto">
                <a
                  href={cert.credentialUrl}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition duration-300 group/link"
                >
                  Verify Credentials 
                  <FaExternalLinkAlt className="text-[9px] transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
