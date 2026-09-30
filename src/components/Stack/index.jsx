import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import "./index.css";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
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
            <Icon className="stack-icon"  />
            <span>{technology.name}</span>
          </div>
        );
      })}
    </div>
  </section>
);

export default Stack;
