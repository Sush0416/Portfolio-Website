import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Career Coach",
    description: "AI-powered web app that gives personalized career guidance using AI APIs. Authentication and dashboard completed; interview feedback integration in progress.",
    technologies: ["AI", "Full-stack", "Career"],
    github: "https://github.com/Sush0416",
    demo: "#",
    image: "/ai-career-coach.jpg", // AI / workspace
    status: "In Progress"
  },
  {
    title: "DELISH — Food Delivery & Tiffin App",
    description: "MERN-based food ordering & tiffin service platform with dish-based search, Stripe payments, and user management. Admin panel functional; deployment pending.",
    technologies: ["MERN", "Payments", "FoodTech"],
    github: "https://github.com/Sush0416",
    demo: "https://drive.google.com/file/d/1o9NWKg8SU32Ucmy0dGgtsc6pcGY2p9o9/view?usp=sharing",
    image: "/Delish.jpg", // Food
    status: "Completed"
  },
  {
    title: "Salesforce PropertyHub",
    description: "A comprehensive property management platform built on Salesforce, featuring property listings, agent management, and customer relationship tools with advanced search and filtering capabilities.",
    technologies: ["Salesforce", "Apex", "LWC", "SOQL"],
    github: "https://github.com/Sush0416/Salesforce-PropertyHub",
    demo: "https://drive.google.com/file/d/1rbOnT48EHK4az6ApF_IToi-vNeVVPLSa/view?usp=sharing",
    image: "/propertyhub.jpg", 
    status: "Completed"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-600 transition-all hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
              )}

              {/* Project Status */}
              {project.status && (
                <span className={`inline-block mb-3 px-3 py-1 text-xs rounded-full ${
                  project.status === "Completed" 
                    ? "bg-green-900/30 text-green-300"
                    : project.status === "In Progress"
                    ? "bg-blue-900/30 text-blue-300"
                    : project.status === "Prototype"
                    ? "bg-yellow-900/30 text-yellow-300"
                    : "bg-gray-700 text-gray-300"
                }`}>
                  {project.status}
                </span>
              )}

              <h3 className="text-xl font-semibold text-purple-400 mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo === "#" ? project.github : project.demo}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}