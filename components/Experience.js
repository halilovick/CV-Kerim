import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Experience = ({ experience }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experience.map((job, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={`${job.company}-${job.title}-${index}`}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p style={{ margin: "0.35rem 0 0", color: "var(--text-muted)" }}>
                      <strong>{job.company}</strong>
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <span>{job.dates}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <motion.button
                  type="button"
                  className="timeline-toggle"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isActive}
                  aria-controls={`experience-details-${index}`}
                  whileTap={{ scale: 0.96 }}
                >
                  {isActive ? "Hide Impact" : "View Impact"}
                  <motion.span
                    style={{ display: "inline-flex", marginLeft: "0.5rem" }}
                    animate={{ rotate: isActive ? 180 : 0 }}
                  >
                    {isActive ? <FiChevronUp /> : <FiChevronDown />}
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.ul
                      id={`experience-details-${index}`}
                      className="timeline-responsibilities"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {job.responsibilities.map((item, responsibilityIndex) => (
                        <motion.li
                          key={`${job.company}-responsibility-${responsibilityIndex}`}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: responsibilityIndex * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

