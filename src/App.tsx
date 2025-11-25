import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [active, setActive] = useState("home");

  const projects = [
    {
      title: "Application de gestion de sorties",
      tech: "Angular, C# .NET",
      description:
        "Préparation du cahier des charges, réalisation des maquettes sur Figma, développement du frontend avec Angular et intégration du backend en C# .NET.",
    },
    {
      title: "Planify — Application de gestion de tâches",
      tech: "Angular, Node.js, Prisma, PostgreSQL",
      description:
        "Conception du modèle de données, développement du backend (Node.js, Prisma, Express), intégration du frontend Angular, tests et documentation avec Swagger.",
    },
    {
      title: "Stage — Développeur backend Node.js/PostgreSQL",
      tech: "Node.js, Express, PostgreSQL, Prisma, Git/GitHub",
      description:
        "Participation à la création du cahier des charges, développement d'API REST, travail en méthode Agile et collaboration via GitHub et Discord.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-poppins transition-colors duration-500">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-sky-400">Ilyas Dahir Houssein</h1>
        <div className="space-x-6 text-sm">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={`${active === section ? 'text-sky-400' : 'text-gray-300'} hover:text-sky-400 transition-colors duration-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Sections avec animations */}
      {active === "home" && (
        <motion.section
          className="flex flex-col items-center justify-center text-center py-32 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Développeur Web Full Stack
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            En formation avec la certification de Scrum Master.
          </p>
          <button
            onClick={() => setActive('projects')}
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Voir mes projets
          </button>
        </motion.section>
      )}

      {active === "about" && (
        <motion.section
          className="max-w-3xl mx-auto py-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">À propos</h2>
          <p className="text-gray-300 leading-relaxed">
            Je suis un développeur web Full Stack passionné par la création d'applications modernes et performantes. En formation continue, je prépare également la certification de Scrum Master afin de renforcer mes compétences en gestion de projet agile.
          </p>
        </motion.section>
      )}

      {active === "skills" && (
        <motion.section
          className="max-w-4xl mx-auto py-20 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-sky-400">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Langages</h3>
              <ul className="space-y-1">
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>C#, SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Frameworks & Outils</h3>
              <ul className="space-y-1">
                <li>Angular, React, Node.js, .NET</li>
                <li>PostgreSQL, Prisma, Git/GitHub</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Méthodes</h3>
              <ul className="space-y-1">
                <li>Agile / Scrum</li>
                <li>Gestion de projet, collaboration</li>
              </ul>
            </div>
          </div>
        </motion.section>
      )}

      {active === "projects" && (
        <motion.section
          id="projects"
          className="max-w-5xl mx-auto py-20 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-sky-400 text-center">
            Mes Projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-slate-700"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-sky-400 mb-3">{proj.tech}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {active === "contact" && (
        <motion.section
          className="max-w-3xl mx-auto py-20 px-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-sky-400">Contact</h2>
          <p className="text-gray-300 mb-6">
            N'hésite pas à me contacter pour une collaboration, un stage ou une opportunité professionnelle.
          </p>
          <div className="space-y-3 text-gray-300">
            <p>Email : <span className="text-white">ilyas.dahir@example.com</span></p>
            <p>GitHub : <a href="https://github.com/ILYAS403" className="text-sky-400 hover:underline">github.com/ILYAS403</a></p>
            <p>LinkedIn : <a href="https://linkedin.com/in/ilyas-dahir-houssein-337bba283" className="text-sky-400 hover:underline">linkedin.com/in/ilyas-dahir-houssein-337bba283</a></p>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="text-center py-6 border-t border-slate-700 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ilyas Dahir Houssein — Tous droits réservés
      </footer>
    </div>
  );
}