import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-website-1-dcnu.onrender.com/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-10">
        Loading Projects...
      </h2>
    );
  }

  return (
    <section className="py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      {projects.length === 0 ? (
        <h2 className="text-center text-xl text-gray-500">
          No projects found.
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image || "https://via.placeholder.com/400"}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="text-2xl font-bold mt-5">
                {project.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {project.technology}
              </p>

              <p className="text-gray-500 mt-3">
                {project.description}
              </p>

              <div className="flex gap-3 mt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;