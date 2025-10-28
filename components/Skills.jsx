import { motion } from 'framer-motion';

const skills = {
  "Salesforce": ["Apex", "Lightning Web Components", "SOQL", "Salesforce CRM", "Flow", "Aura"],
  "Programming": ["C++", "Java", "JavaScript", "TypeScript"],
  "AI/ML & Data": ["Pandas", "NumPy", "OpenCV", "TensorFlow", "Scikit-learn"],
  "Web Development": ["MERN Stack", "React", "Node.js", "REST APIs", "Stripe Integration"],
  "Databases": ["MySQL", "Oracle DBMS", "MongoDB", "Salesforce Objects"],
  "Tools": ["Git", "GitHub", "Power BI", "Matplotlib", "Plotly", "Salesforce CLI"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      category === "Salesforce" 
                        ? "bg-blue-900/30 text-blue-300 hover:bg-blue-800/50" 
                        : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Focus */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-600/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-6">
            Salesforce Development Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-blue-400 font-semibold">Apex</div>
              <div className="text-gray-300 text-sm">Backend Development</div>
            </div>
            <div className="p-4">
              <div className="text-blue-400 font-semibold">LWC</div>
              <div className="text-gray-300 text-sm">Frontend Components</div>
            </div>
            <div className="p-4">
              <div className="text-blue-400 font-semibold">SOQL & SOSL</div>
              <div className="text-gray-300 text-sm">Data Querying</div>
            </div>
            <div className="p-4">
              <div className="text-blue-400 font-semibold">Salesforce CRM</div>
              <div className="text-gray-300 text-sm">Platform Management</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}