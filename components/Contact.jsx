import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Replace this URL with your Google Apps Script Web App URL
    // After deploying your Google Apps Script, paste the web app URL here
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ7nmc8cqgR1HetsSjdZ9in5a3Bwu5XL-kWgAzXaxKEEl3bo76eRGyrXFW6fyAaRk/exec';
    
    try {
      // Create form data to send
      const data = new FormData();
      data.append('Name', formData.name);
      data.append('Email', formData.email);
      data.append('Subject', formData.subject);
      data.append('Message', formData.message);
      data.append('Timestamp', new Date().toLocaleString());

      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        body: data
      });

      // With 'no-cors' mode, we won't get a response back
      // So we assume success if no error is thrown
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together or just have a chat!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:sushmitakatariya18@gmail.com" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="bg-purple-600 p-3 rounded-lg group-hover:bg-purple-700 transition-all">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-purple-300 transition">sushmitakatariya18@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+918085787856" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="bg-purple-600 p-3 rounded-lg group-hover:bg-purple-700 transition-all">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-purple-300 transition">+91 8085787856</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Jabalpur, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours. For urgent matters, please call or text me.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-900/20 border border-green-800 text-green-300' 
                      : 'bg-red-900/20 border border-red-800 text-red-300'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="flex-shrink-0" size={20} />
                  ) : (
                    <XCircle className="flex-shrink-0" size={20} />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:from-purple-600 disabled:hover:to-pink-600 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs text-center pt-2">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}