// src/components/TimelineItem.jsx
import React from "react";
import { motion } from "framer-motion";

function TimelineItem({ icon, title, duration, description, tech = [], link }) {
  return (
    <motion.div
      className="relative pl-10 pb-10 border-l-2 border-cyan-600/40"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute left-[-12px] top-1 w-4 h-4 bg-cyan-400 rounded-full shadow-md"></div>

      <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition duration-300">
        <div className="flex items-center gap-2 text-xl font-semibold text-white mb-1">
          {icon}
          {title}
        </div>
        <p className="text-sm text-cyan-400 mb-2">{duration}</p>
        <p className="text-slate-300 text-[15px]">{description}</p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-cyan-800/50 border border-cyan-500 rounded-full text-white"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-sm text-cyan-400 underline hover:text-cyan-200"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default TimelineItem;
