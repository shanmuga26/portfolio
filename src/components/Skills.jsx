import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiTensorflow,
  SiReact,
  SiMongodb,
  SiStreamlit,
  SiUnity,
  SiBlender,
  SiTailwindcss,
  SiC,
  SiArduino,
} from "react-icons/si";

const techSkills = [
  { icon: <SiPython />, name: "Python", link: "https://www.python.org" },
  { icon: <SiTensorflow />, name: "TensorFlow", link: "https://www.tensorflow.org" },
  { icon: <SiReact />, name: "React", link: "https://react.dev" },
  { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com" },
  { icon: <SiStreamlit />, name: "Streamlit", link: "https://streamlit.io" },
  { icon: <SiUnity />, name: "Unity", link: "https://unity.com" },
  { icon: <SiBlender />, name: "Blender", link: "https://blender.org" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", link: "https://tailwindcss.com" },
  { icon: <SiC />, name: "Embedded C", link: "#" },
  { icon: <SiArduino />, name: "ESP32", link: "https://espressif.com" },
];

function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-cyan-400 inline-block">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
        {techSkills.map((skill, i) => (
          <motion.a
            key={i}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-5xl text-cyan-300 hover:text-cyan-400 transition-all"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
          >
            {skill.icon}
            <p className="text-xs mt-1">{skill.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Skills;
