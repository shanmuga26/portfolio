// src/components/Projects.jsx
import React from "react";
import TimelineItem from "./TimelineItem";
import { Brain, HeartPulse, Baby, Smile, Globe } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 relative">
        <span className="border-b-4 border-cyan-500 pb-1">Projects</span>
      </h2>

      <div className="space-y-10">
        <TimelineItem
          icon={<Brain className="text-pink-400" />}
          title="Breast Cancer Risk Stratification"
          duration="Ongoing"
          description="Stratified breast lesion risk using ultrasound B-mode and Doppler imaging with clinical data and Grad-CAM."
          tech={["Python", "TensorFlow", "Grad-CAM", "OpenCV"]}
          link="https://github.com/shanmuga26"
        />
        <TimelineItem
          icon={<HeartPulse className="text-red-400" />}
          title="Smart Ring for Driver Health"
          duration="Ongoing"
          description="Wearable device for heart rate variability and motion tracking to detect cardiac distress."
          tech={["ESP32", "MAX30102", "MPU6050", "Embedded C"]}
        />
        <TimelineItem
          icon={<Baby className="text-yellow-400" />}
          title="AI-Powered Neonatal Vitals Monitor"
          duration="Aug 2024 – Feb 2025"
          description="Built LSTM model with ESP32 sensors + React + Flask dashboard for NICU alerts and monitoring."
          tech={["LSTM", "Flask", "React.js", "Twilio", "Chart.js"]}
        />
        <TimelineItem
          icon={<Smile className="text-green-400" />}
          title="Mental Health Journal (NLP)"
          duration="2025"
          description="Built mood-aware journaling app with sentiment analysis and Google Calendar reminders."
          tech={["Streamlit", "TextBlob", "MongoDB"]}
        />
        <TimelineItem
          icon={<Globe className="text-blue-400" />}
          title="AR/VR-Based Virtual Herbal Garden"
          duration="2025"
          description="Gamified 3D garden with AR/VR exploration, plant info filtering, and real-time interaction."
          tech={["Unity", "Blender", "HTML/CSS"]}
        />
      </div>
    </section>
  );
}

export default Projects;
