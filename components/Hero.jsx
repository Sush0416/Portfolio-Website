import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <span className="text-6xl md:text-7xl">👋🏻</span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}Hello! I am
          </span>
          <br />
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-pink-500 pr-4 text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sushmita Katariya
            </span>{" "}
            <span>✨</span>
          </span>
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Aspiring <span className="text-purple-400">AI Engineer</span> & Full Stack Developer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate about building intelligent solutions with AI/ML, computer vision, 
          and modern web technologies. Certified in cybersecurity and database management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
            View My Work
          </a>
          <a 
            href="/SushmitaKatariyaResume.pdf" 
            className="flex items-center gap-2 border border-purple-600 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all"
            download
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a href="https://github.com/Sush0416" className="text-gray-400 hover:text-white transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/sushmita-katariya-183926267" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:sushmitakatariya18@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
