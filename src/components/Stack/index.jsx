import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiSqlite,
} from "react-icons/si";
import "./index.css";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "javascript",
  },
  {
    name: "React",
    icon: SiReact,
    className: "react",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "nextjs",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    className: "nodejs",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    className: "express",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    className: "mongodb",
  },
  {
    name: "Git",
    icon: SiGit,
    className: "git",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    className: "github",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    className: "sqlite",
  },
];

const Stack = () => (
  <section className="stack" id="stack">
    <div className="stack-header">
      <p className="section-label">TECH STACK</p>

      <h2>Tools I use to bring ideas to life.</h2>
    </div>

    <div className="stack-grid">
      {technologies.map((technology) => {
        const Icon = technology.icon;

        return (
          <div className="stack-item" key={technology.name}>
            <Icon className={`stack-icon ${technology.className}`} />
            <span>{technology.name}</span>
          </div>
        );
      })}
    </div>
  </section>
);

export default Stack;
