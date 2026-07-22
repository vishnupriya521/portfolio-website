import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
     .get("https://portfolio-website-1-dcnu.onrender.com")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 py-16 px-6"
    >
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project._id || index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <img
              src={project.image || "https://via.placeholder.com/400x250"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-3">
                {project.technology}
              </p>

              <p className="text-gray-500 mb-5">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded"
                >
                  GitHub
                </a>

                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
