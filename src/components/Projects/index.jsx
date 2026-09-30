import "./index.css";

const projects = [
  {
    number: "01",
    title: "AI ATS Resume Analyzer",
    description:
      "An AI-powered platform that analyzes resumes and provides ATS-focused feedback.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "PDFParse",
      "Multer",
    ],
    liveUrl: "https://ai-resume-ats-analyzer-seven.vercel.app/",
    githubUrl: "https://github.com/yadhukrishnakb/ai-resume-ats-analyzer",
  },
  {
    number: "02",
    title: "Local Business Directory",
    description:
      "A web platform for discovering and exploring local businesses in one place.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://business-directory-dqpj.vercel.app/",
    githubUrl: "https://github.com/yadhukrishnakb/business-directory",
  },
];

const Projects = () => (
  <section className="projects" id="work">
    <div className="projects-header">
      <p className="section-label">SELECTED WORK</p>
      <h2>A collection of things I&apos;ve built.</h2>
    </div>

    <div className="projects-list">
      {projects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className="project-info">
            <div>
              <p className="project-number">
                {project.number} / {String(projects.length).padStart(2, "0")}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
