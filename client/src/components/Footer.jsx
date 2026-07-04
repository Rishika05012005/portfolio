import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            RISHIKA G.
          </span>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            AI & Python Developer | UI & UX Engineer
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
          <a href="#" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#certifications" className="hover:text-blue-400 transition duration-300">Certifications</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-xl text-slate-400">
          <a
            href="https://github.com/Rishika05012005/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rishika-g-5jan2005/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mgrishi2005@gmail.com"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="max-w-6xl mx-auto border-t border-slate-900/60 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold select-none">
        <p>© {currentYear} Rishika G. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
