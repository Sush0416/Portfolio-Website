import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
  { title: "Cybersecurity Essentials", authority: "Cisco Networking Academy", filename: "Cybersecurity Essentials.pdf" },
  { title: "Partner: Cloud Security", authority: "Cisco Networking Academy", filename: "Partner Cloud Security.pdf" },
  { title: "Introduction to Cybersecurity", authority: "Cisco Networking Academy", filename: "Introduction to Cybersecurity.pdf" },
  { title: "Linux Essentials", authority: "Cisco Networking Academy", filename: "Linux Essentials.pdf" },
  { title: "CyberOps Associate", authority: "Cisco Networking Academy", filename: "CyberOps Associate.pdf" },
  { title: "Python Essentials 1", authority: "Cisco Networking Academy", filename: "Pyhton Essential 1.pdf" },
  { title: "Python Essentials 2", authority: "Cisco Networking Academy", filename: "Pyhton Essentials 2.pdf" },
  { title: "Introduction to Data Science", authority: "Cisco Networking Academy", filename: "Introduction to Data Science.pdf" },
  { title: "CCNA 1", authority: "Cisco Networking Academy", filename: "CCNA1.pdf" },
  { title: "CCNA 2", authority: "Cisco Networking Academy", filename: "CCNA 2.pdf" },
  { title: "CCNA 3", authority: "Cisco Networking Academy", filename: "CCNA 3.pdf" },
  { title: "Java", authority: "Oracle Academy", filename: "Java.pdf" },
  { title: "Database Management System (DBMS)", authority: "Oracle Academy", filename: null },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-600 transition ${
                cert.filename ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (cert.filename) {
                  setSelectedCert(cert);
                  setIsModalOpen(true);
                }
              }}
            >
              <h3 className="text-purple-400 font-semibold">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.authority}</p>
            </div>
          ))}
        </div>

        {isModalOpen && selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-4xl w-full h-3/4 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-black text-xl font-bold"
              >
                ×
              </button>
              <iframe
                src={`/${selectedCert.filename}`}
                width="100%"
                height="100%"
                title={selectedCert.title}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
