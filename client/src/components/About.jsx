import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");

  const education = [
    {
      institution: "Jaya Engineering College",
      degree: "B.E. in Computer Science Engineering",
      duration: "Graduation: 2026",
      score: "CGPA: 8.73 / 10",
      location: "Chennai, India",
    },
    {
      institution: "Kaligi Ranganathan Montford Matric Higher Secondary School",
      degree: "Higher Secondary Certificate (HSLC)",
      duration: "Completion: 2022",
      score: "Percentage: 78.5%",
      location: "Ayanavaram, Chennai",
    },
    {
      institution: "Kaligi Ranganathan Montford Matric Higher Secondary School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      duration: "Completion: 2020",
      score: "Percentage: 74.2%",
      location: "Ayanavaram, Chennai",
    },
  ];

  const experience = [
    {
      role: "AI & ML Intern",
      company: "Magic Bus Foundation",
      duration: "Dec 2024 - Mar 2025",
      location: "Remote / Hybrid",
      description: [
        "Performed structured data cleaning and preprocessing operations using Pandas.",
        "Applied NumPy for numerical computations and data matrix operations.",
        "Created rich graphical visual charts using Matplotlib to expose insights.",
        "Created base predictive machine learning models for analytics projects.",
      ],
    },
    {
      role: "UI & UX Design Intern",
      company: "Think Bright",
      duration: "Jul 2024 - Sep 2024",
      location: "Remote",
      description: [
        "Designed wireframes and interactive UI screens for web and mobile products.",
        "Applied user-centered design rules to enhance frontend workflow usability.",
        "Prepared UI layouts using Figma with structured style guides.",
      ],
    },
    {
      role: "UI & UX Intern",
      company: "System Tron",
      duration: "Apr 2024 - Jun 2024",
      location: "Remote",
      description: [
        "Assisted in refining user journey flows and wireframe layouts.",
        "Participated in frontend prototyping, layout improvements, and design reviews.",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-blue-500 rounded-full" />
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Get to know my educational background and recent professional internship achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Quick Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-6">Professional Profile</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I am a passionate software developer specializing in Python and React.js. 
                My focus lies in constructing scalable, intelligent software systems with sleek user interfaces. 
                I enjoy bridging the gap between sophisticated data backend processes and responsive web frontends.
              </p>
              
              <div className="space-y-4 border-t border-slate-800/80 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Degree</span>
                  <span className="text-slate-300 font-medium">B.E. Computer Science</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Education status</span>
                  <span className="text-slate-300 font-medium">Final Year (Grad. 2026)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Location</span>
                  <span className="text-slate-300 font-medium">Chennai, India</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Email</span>
                  <a href="mailto:mgrishi2005@gmail.com" className="text-blue-400 hover:underline">
                    mgrishi2005@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Timeline */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tabs Trigger */}
            <div className="flex bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 max-w-sm mx-auto lg:mx-0">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === "experience"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <FaBriefcase /> Internships
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === "education"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <FaGraduationCap /> Education
              </button>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-6 sm:pl-8 border-l border-slate-800/80 py-2 space-y-8">
              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {experience.map((exp, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        
                        <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700/60 transition duration-300">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition duration-300">
                                {exp.role}
                              </h4>
                              <p className="text-slate-300 font-semibold text-sm mt-1">{exp.company}</p>
                            </div>
                            <div className="flex flex-col items-start sm:items-end gap-1.5">
                              <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 border border-slate-800/60 px-2.5 py-1 rounded-full font-medium">
                                <FaCalendarAlt /> {exp.duration}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <FaMapMarkerAlt /> {exp.location}
                              </span>
                            </div>
                          </div>
                          
                          <ul className="list-disc pl-4 space-y-2 text-slate-400 text-sm leading-relaxed">
                            {exp.description.map((item, id) => (
                              <li key={id}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition duration-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                        <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700/60 transition duration-300">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition duration-300">
                                {edu.degree}
                              </h4>
                              <p className="text-slate-300 font-semibold text-sm mt-1">{edu.institution}</p>
                            </div>
                            <div className="flex flex-col items-start sm:items-end gap-1.5">
                              <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 border border-slate-800/60 px-2.5 py-1 rounded-full font-medium">
                                <FaCalendarAlt /> {edu.duration}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <FaMapMarkerAlt /> {edu.location}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-cyan-400 font-bold text-sm bg-cyan-950/20 border border-cyan-500/10 inline-block px-3 py-1 rounded-lg">
                            {edu.score}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
