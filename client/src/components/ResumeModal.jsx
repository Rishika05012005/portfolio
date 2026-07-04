import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";
import resume from "../assets/Rishika_Resume.pdf";

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl h-[85vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header Control Panel */}
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex justify-between items-center select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <h3 className="ml-2 text-sm font-bold text-slate-300">Rishika_Resume.pdf</h3>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={resume}
                  download="Rishika_Resume.pdf"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition text-sm flex items-center gap-1.5 font-medium"
                  title="Download PDF"
                >
                  <FaDownload /> <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition"
                  title="Close Modal"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Document Viewer Frame */}
            <div className="flex-1 bg-slate-950 relative">
              <iframe
                src={resume}
                className="w-full h-full border-none"
                title="Rishika Resume Document Viewer"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
