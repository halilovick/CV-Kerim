import Head from "next/head";
import cvData from "../data/cv.json";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const getSummarySnippet = (summary) => {
  if (!summary) {
    return "";
  }

  const sentences = summary.split(". ");
  const snippet = sentences.slice(0, 2).join(". ");
  return snippet.endsWith(".") ? snippet : `${snippet}.`;
};

const getUniqueCountries = (experience = []) => {
  const toCountry = (location) => {
    if (!location) return null;
    const parts = location.split(",");
    return parts[parts.length - 1].trim();
  };

  return experience.reduce((acc, job) => {
    const country = toCountry(job.location);
    if (country) {
      acc.add(country);
    }
    return acc;
  }, new Set());
};

export default function Home({ cv }) {
  const summarySnippet = getSummarySnippet(cv.summary);
  const uniqueCountries = getUniqueCountries(cv.experience);

  const teachingRoles = cv.experience.filter((job) =>
    job.title.toLowerCase().includes("assistant")
  ).length;

  const stats = [
    { label: "Products Shipped", value: `${cv.projects.length}+` },
    { label: "Core Technologies", value: cv.skills.length },
    { label: "Teaching Roles", value: teachingRoles },
    { label: "Countries Collaborated", value: uniqueCountries.size },
  ];

  return (
    <div className="container">
      <Head>
        <title>
          {cv.name} | {cv.title}
        </title>
        <meta name="description" content={`Interactive CV for ${cv.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          name={cv.name}
          title={cv.title}
          contact={cv.contact}
          profilePicture={cv.profilePicture}
          stats={stats}
          summarySnippet={summarySnippet}
        />
        <div className="main-content-grid">
          <aside className="sidebar-column">
            <Summary summary={cv.summary} />
            <Skills skills={cv.skills} />
          </aside>
          <section className="main-column">
            <Experience experience={cv.experience} />
            <Projects projects={cv.projects} />
            <Education education={cv.education} />
          </section>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { cv: cvData } };
}

