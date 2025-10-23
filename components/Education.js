import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ education }) => (
  <section className="section">
    <h2>
      <FaGraduationCap /> Education
    </h2>
    <div className="skill-group">
      {education.map((edu, index) => (
        <motion.article
          key={`${edu.school}-${edu.degree}-${index}`}
          className="education-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 style={{ marginTop: 0 }}>{edu.degree}</h3>
          <p style={{ marginBottom: "0.4rem", fontWeight: 600 }}>{edu.school}</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <FiCalendar /> {edu.dates}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <FiMapPin /> {edu.location}
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Education;

