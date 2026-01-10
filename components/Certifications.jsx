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
  { title: "Salesforce AI Agent Developer", authority: "TCS through Smartbridge", filename: "SalesforceCertificate (2).pdf" },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    if (cert.filename) {
      setSelectedCert(cert);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Delay clearing to avoid flicker during animation
    setTimeout(() => setSelectedCert(null), 300);
  };

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-600 transition-all duration-300 ${
                cert.filename ? 'cursor-pointer hover:scale-[1.02] hover:bg-gray-800/70' : 'opacity-70'
              }`}
              onClick={() => openModal(cert)}
              role={cert.filename ? "button" : "presentation"}
              tabIndex={cert.filename ? 0 : -1}
              onKeyDown={(e) => {
                if (cert.filename && (e.key === 'Enter' || e.key === ' ')) {
                  openModal(cert);
                }
              }}
            >
              <h3 className="text-purple-400 font-semibold text-lg mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.authority}</p>
            </motion.div>
          ))}
        </div>

        {isModalOpen && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900 rounded-xl max-w-4xl w-full h-[80vh] flex flex-col shadow-2xl border border-gray-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-gray-300 text-sm">{selectedCert.authority}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={`/${selectedCert.filename}`}
                  width="100%"
                  height="100%"
                  title={`${selectedCert.title} - ${selectedCert.authority}`}
                  className="border-0"
                />
              </div>
              
              <div className="p-4 border-t border-gray-700 bg-gray-800/50 flex justify-between items-center">
                <span className="text-gray-400 text-sm">
                  PDF Viewer
                </span>
                <a
                  href={`/${selectedCert.filename}`}
                  download
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition text-sm font-medium"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}