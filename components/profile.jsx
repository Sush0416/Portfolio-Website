import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Download } from 'lucide-react';

export default function Profile() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col items-center gap-12">
          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-2xl shadow-purple-500/30">
                <img 
                  src="/profile.jpg" 
                  alt="Sushmita Katariya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 -z-10"></div>
            </div>
          </motion.div>
          
          {/* Profile Content */}
          <motion.div 
            className="flex-grow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Sushmita Katariya</h3>
            <p className="text-purple-400 text-lg mb-6">Aspiring AI Engineer & Full Stack Developer</p>
            
            <p className="text-gray-300 mb-6">
              Computer Science student passionate about AI/ML, computer vision, and full-stack development. 
              I enjoy building intelligent solutions that solve real-world problems and continuously expanding 
              my skills in emerging technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="text-purple-400 mr-3" />
                <span>Jabalpur, Madhya Pradesh</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="text-purple-400 mr-3" />
                <a href="mailto:sushmitakatariya18@gmail.com" className="hover:text-white transition-colors">
                  sushmitakatariya18@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="text-purple-400 mr-3" />
                <a href="tel:+918085787856" className="hover:text-white transition-colors">
                  +91 8085787856
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar size={20} className="text-purple-400 mr-3" />
                <span>B.Tech 2022-2026</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
              <a 
                href="/SushmitaKatariyaResume.pdf" 
                className="flex items-center gap-2 border border-purple-600 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all"
                download
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}