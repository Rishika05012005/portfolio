import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0b1220]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-left mb-10"
>
  <h3 className="text-2xl font-semibold text-blue-400 mb-2">
    AI & ML Intern – Magic Bus Foundation
  </h3>

  <p className="text-sm text-gray-500 mb-4">
    Dec 12 – March 12
  </p>

  <ul className="text-gray-400 space-y-3 list-disc pl-5">
    <li>
      Performed data cleaning and preprocessing using <strong>Pandas</strong>.
    </li>
    <li>
      Applied numerical computations and data transformations using <strong>NumPy</strong>.
    </li>
    <li>
      Created data visualizations and analytical charts using <strong>Matplotlib</strong>.
    </li>
    <li>
      Analyzed structured datasets to extract meaningful insights.
    </li>
    <li>
      Developed basic predictive models as part of AI & ML learning projects.
    </li>
  </ul>
</motion.div>
   

      </div>
    </section>
  );
}
