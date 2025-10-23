import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiFilter, FiX } from "react-icons/fi";

const Projects = ({ projects }) => {
  const [selectedTech, setSelectedTech] = useState([]);

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet);
  }, [projects]);

  const toggleTechnology = (tech) => {
    setSelectedTech((current) =>
      current.includes(tech)
        ? current.filter((item) => item !== tech)
        : [...current, tech]
    );
  };

  const clearFilters = () => setSelectedTech([]);

  const filteredProjects =
    selectedTech.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTech.every((tech) => project.technologies.includes(tech))
        );

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="filter-bar">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            fontWeight: 600,
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: "0.75rem",
          }}
        >
          <FiFilter /> Filter by Tech
        </span>
        {allTechnologies.map((tech) => {
          const isActive = selectedTech.includes(tech);
          return (
            <button
              key={tech}
              type="button"
              className={`filter-chip${isActive ? " active" : ""}`}
              onClick={() => toggleTechnology(tech)}
            >
              {tech}
            </button>
          );
        })}
        {selectedTech.length > 0 && (
          <button
            type="button"
            className="filter-chip active"
            onClick={clearFilters}
            style={{
              background: "var(--accent-gradient)",
              color: "white",
              borderColor: "transparent",
            }}
          >
            <FiX />
            Clear
          </button>
        )}
      </div>

      <AnimatePresence>
        {filteredProjects.length > 0 ? (
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={`${project.name}-${index}`}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-meta">
                  <span>{project.technologies.slice(0, 2).join(" • ")}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name}`}
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
                  >
                    View <FiExternalLink />
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p style={{ color: "var(--text-muted)" }}>{project.description}</p>
                <div style={{ marginTop: "1rem" }}>
                  {project.technologies.map((tech) => (
                    <span key={`${project.name}-${tech}`} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            No projects match that tech stack just yet. Try clearing the filters.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
