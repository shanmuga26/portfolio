// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-cyan-400 inline-block">Experience</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-cyan-400/20 transition"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">
              R&D Intern @ Finoseq Bioinformatics
            </h3>
          </div>
          <p className="text-sm text-cyan-300 mb-1">
            RUSA-Entrepreneur Hub • Madurai, Tamil Nadu
          </p>
          <p className="text-sm text-gray-400 mb-4">Jun 2024 – Jul 2024</p>

          <ul className="list-disc list-inside text-slate-300 text-[15px] space-y-1">
            <li>
              Led transcriptomic & docking analysis for Esophageal Carcinoma using RNA-Seq pipelines.
            </li>
            <li>
              Identified novel METTL3-regulated targets and simulated Epirubicin binding affinity.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {["R", "DESeq2", "AutoDock", "DAVID", "PyRx"].map((tool, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-cyan-800/40 border border-cyan-500 rounded-full text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
