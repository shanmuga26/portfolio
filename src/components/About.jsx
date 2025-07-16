import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 px-6 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative inline-block">
        <span className="border-b-2 border-cyan-500 pb-1">About Me</span>
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed">
        I’m a <span className="text-cyan-400 font-medium">Biomedical Engineer</span> passionate about building <span className="text-purple-400 font-medium">AI-powered healthcare solutions</span> and <span className="text-orange-300 font-medium">embedded medical systems</span>.
        I specialize in <span className="text-blue-400 font-medium">Python</span>, <span className="text-green-400 font-medium">Machine Learning</span>, and <span className="text-pink-400 font-medium">system integration</span> to solve real-world medical challenges.
      </p>
    </motion.section>
  );
}

export default About;
