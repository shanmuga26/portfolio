import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-700 mt-16 py-6 px-4 text-center text-slate-400">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
        <p className="text-sm">📧 shanmugalingam2005@gmail.com</p>

        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/shanmuga26"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/shanmugalingam"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:shanmugalingam2005@gmail.com"
            className="hover:text-white"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs mt-2">© 2025 Shanmuga Lingam. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
