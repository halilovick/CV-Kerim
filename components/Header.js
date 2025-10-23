import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiGlobe,
  FiDownload,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Header = ({
  name,
  title,
  contact,
  profilePicture,
  stats = [],
  summarySnippet,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.header
      className="card hero-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div
        style={{
          justifySelf: "end",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          <span>{isDark ? "Light" : "Dark"} Mode</span>
        </button>
      </div>

      {profilePicture && (
        <motion.img
          src={profilePicture}
          alt={`${name} profile`}
          className="profile-picture"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      )}

      <motion.h1
        style={{
          margin: 0,
          fontSize: "2.75rem",
          letterSpacing: "-0.03em",
          color: "var(--text-color)",
        }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {name}
      </motion.h1>

      <motion.p
        style={{
          fontSize: "1.15rem",
          margin: "0.4rem 0 1.2rem",
          color: "var(--text-muted)",
          maxWidth: "560px",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {title}
      </motion.p>

      {summarySnippet && (
        <motion.p
          style={{
            margin: 0,
            color: "var(--text-muted)",
            maxWidth: "700px",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          {summarySnippet}
        </motion.p>
      )}

      <motion.div
        className="contact-links"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.35 }}
      >
        <a
          className="contact-link"
          href={`mailto:${contact.email}`}
          title={contact.email}
          aria-label={`Email ${name}`}
        >
          <FiMail />
        </a>
        <a
          className="contact-link"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin />
        </a>
        <a
          className="contact-link"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub Profile"
        >
          <FiGithub />
        </a>
        {contact.website && (
          <a
            className="contact-link"
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            title="Portfolio"
            aria-label="Portfolio Website"
          >
            <FiGlobe />
          </a>
        )}
      </motion.div>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.4 }}
      >
        <a
          className="primary-btn"
          href="/CV-Kerim-Halilovic-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload />
          Download CV
        </a>
        {contact.website && (
          <a
            className="ghost-btn"
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGlobe />
            Visit Portfolio
          </a>
        )}
      </motion.div>

      {stats.length > 0 && (
        <div className="stats-grid">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Header;
