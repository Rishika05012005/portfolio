import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaBrain } from "react-icons/fa";
import { SiPython, SiReact, SiTensorflow, SiPandas } from "react-icons/si";
import profilePic from "../assets/rishika.jpg";
import resume from "../assets/Rishika_Resume.pdf";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-slate-950">
      {/* Background Glowing Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT COLUMN - CONTENT (7/12 cols on large screen) */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          {/* Sub-badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <FaBrain className="text-sm" />
            AI & Python Developer
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rishika G.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Detail-oriented UI & UX Developer specializing in creating clean,
            intelligent, and responsive web applications. Merging web engineering with
            practical Python scripting and AI/ML model integration.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <a
              href={resume}
              download="Rishika_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white transition duration-300 glowing-btn-blue text-center flex items-center justify-center gap-2"
            >
              Download Resume
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition duration-300 glowing-btn-gray flex items-center justify-center gap-2"
            >
              <FaFileAlt /> View Resume
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-transparent border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition duration-300 text-center"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-6 mt-10 justify-center lg:justify-start text-2xl text-slate-400"
          >
            <a
              href="https://github.com/Rishika05012005/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300 transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rishika-g-5jan2005/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300 transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mgrishi2005@gmail.com"
              className="hover:text-cyan-400 transition duration-300 transform hover:scale-110"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - IMAGE / DYNAMICS (5/12 cols) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 relative select-none">

          {/* Outer Glowing / Rotating ring behind Avatar */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-600 blur-[8px] opacity-40 animate-rotate-glowing" />

          {/* Inner ring */}
          <div className="absolute w-[278px] h-[278px] sm:w-[308px] sm:h-[308px] md:w-[374px] md:h-[374px] rounded-full bg-slate-950 z-0" />

          {/* Avatar Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative z-10 w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] md:w-[366px] md:h-[366px]"
          >
            <img
              src={profilePic}
              alt="Rishika"
              className="w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl"
            />
          </motion.div>

          {/* Floating Tech Tags */}
          {/* Python Tag */}
          <motion.div
            className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float"
            style={{ animationDelay: "0s" }}
          >
            <SiPython className="text-blue-400 text-xl md:text-2xl" />
            <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Python</span>
          </motion.div>

          {/* React Tag */}
          <motion.div
            className="absolute bottom-8 -left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <SiReact className="text-cyan-400 text-xl md:text-2xl" />
            <span className="text-xs font-semibold text-slate-200 hidden sm:inline">React</span>
          </motion.div>

          {/* Pandas Tag */}
          <motion.div
            className="absolute top-12 right-0 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float"
            style={{ animationDelay: "3s" }}
          >
            <SiPandas className="text-white text-xl md:text-2xl" />
            <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Pandas</span>
          </motion.div>

          {/* Tensorflow/AI Tag */}
          <motion.div
            className="absolute bottom-16 -right-6 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float"
            style={{ animationDelay: "0.8s" }}
          >
            <SiTensorflow className="text-orange-400 text-xl md:text-2xl" />
            <span className="text-xs font-semibold text-slate-200 hidden sm:inline">TensorFlow</span>
          </motion.div>
        </div>

      </div>

      {/* Resume Modal integration */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
