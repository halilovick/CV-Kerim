import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

const FOCUS_KEYWORDS = [
  { label: "AI-Powered Products", terms: ["ai-powered", "machine learning"] },
  { label: "Fullstack Engineering", terms: ["full-stack", "fullstack", "next.js"] },
  { label: "Product Leadership", terms: ["founded", "developed", "built"] },
  { label: "Data-Driven Decisions", terms: ["data-driven", "predict"] },
  { label: "Scalable Systems", terms: ["scalable", "deployed", "production"] },
];

const Summary = ({ summary }) => {
  const [expanded, setExpanded] = useState(false);

  const snippet = useMemo(() => {
    const maxLength = 260;
    if (summary.length <= maxLength) {
      return summary;
    }

    const trimmed = summary.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");
    return `${trimmed.slice(0, lastSpace)}…`;
  }, [summary]);

  const focusAreas = useMemo(() => {
    const lowerSummary = summary.toLowerCase();
    const matched = FOCUS_KEYWORDS.filter((keyword) =>
      keyword.terms.some((term) => lowerSummary.includes(term))
    ).map((keyword) => keyword.label);

    if (matched.length > 0) {
      return matched;
    }

    return ["Impactful Web Experiences", "User-Centric Development", "Continuous Learning"];
  }, [summary]);

  return (
    <motion.section
      className="section card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <h2>
        <FaUser /> Summary
      </h2>
      <AnimatePresence initial={false} mode="wait">
        <motion.p
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ color: "var(--text-muted)" }}
        >
          {expanded ? summary : snippet}
        </motion.p>
      </AnimatePresence>
      {summary.length > snippet.length && (
        <motion.button
          type="button"
          className="timeline-toggle"
          onClick={() => setExpanded((current) => !current)}
          whileTap={{ scale: 0.96 }}
          style={{ marginTop: "0.75rem" }}
        >
          {expanded ? "Show Less" : "Read Full Story"}
        </motion.button>
      )}

      <div style={{ marginTop: "1.4rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: "0.75rem",
            marginBottom: "0.6rem",
          }}
        >
          <FiZap /> Focus Areas
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {focusAreas.map((area) => (
            <motion.span
              key={area}
              className="tag"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Summary;

