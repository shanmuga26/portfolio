import React from "react";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = ["AI Engineer", "Biomedical Systems Developer", "Python & ML Enthusiast"];

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 bg-[#0f172a] px-6 md:px-16 text-white overflow-hidden"
    >
      {/* 👉 Text Section */}
      <div className="text-center md:text-left space-y-4 max-w-xl z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm Ashok
        </motion.h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {roles.map((role, idx) => (
            <motion.span
              key={role}
              className="bg-[#1e293b] px-4 py-1 rounded-full text-sm text-slate-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.2, duration: 0.4 }}
            >
              {role}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="text-sm text-slate-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          📧 shanmugalingam2005@gmail.com
        </motion.div>

        <motion.div
          className="flex gap-5 mt-2 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <a href="https://github.com/shanmuga26" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/shanmugalingam" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="mailto:shanmugalingam2005@gmail.com">
            <Mail className="w-6 h-6 hover:text-blue-400" />
          </a>
        </motion.div>
      </div>

      {/* 👉 Image Section */}
      <motion.img
        src={profilePic}
        alt="Ashok"
        className="w-[250px] h-auto rounded-lg shadow-xl z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}

export default Hero;
