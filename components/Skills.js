import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

const SKILL_DETAILS = {
  "JavaScript (ES6+)": { category: "Frontend", level: 92 },
  TypeScript: { category: "Frontend", level: 88 },
  React: { category: "Frontend", level: 90 },
  "Next.js": { category: "Frontend", level: 87 },
  "Node.js": { category: "Backend", level: 84 },
  HTML5: { category: "Frontend", level: 93 },
  "CSS3 / SASS": { category: "Frontend", level: 85 },
  GraphQL: { category: "Backend", level: 78 },
  "REST APIs": { category: "Backend", level: 83 },
  Git: { category: "Tooling", level: 90 },
  Docker: { category: "Tooling", level: 80 },
  "CI/CD": { category: "Tooling", level: 82 },
};

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const groupedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      const detail = SKILL_DETAILS[skill] || {
        category: "Other",
        level: 70,
      };

      if (!acc[detail.category]) {
        acc[detail.category] = [];
      }

      acc[detail.category].push({
        name: skill,
        level: detail.level,
      });
      return acc;
    }, {});
  }, [skills]);

  const categories = useMemo(
    () => ["All", ...Object.keys(groupedSkills)],
    [groupedSkills]
  );

  const visibleGroups =
    activeCategory === "All"
      ? Object.entries(groupedSkills)
      : [[activeCategory, groupedSkills[activeCategory] || []]];

  return (
    <section className="section card">
      <h2>
        <FaCogs /> Skills Matrix
      </h2>
      <div className="skills-layout">
        <div className="skills-tabs">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                className={`skills-tab${isActive ? " active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="skill-group"
          >
            {visibleGroups.map(([category, skillSet]) => (
              <motion.div
                key={category}
                className="skill-cluster"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    color: "var(--primary-color)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                  }}
                >
                  <FiLayers />
                  {category}
                </div>

                {skillSet.map((skill) => (
                  <div key={skill.name} style={{ marginBottom: "1rem" }}>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    <div className="skill-bar-label">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
