import "./index.css";

const photo = "";

const About = () => (
  <section className="about" id="about">
    <div className="about-header">
      <p className="section-label">ABOUT ME</p>
    </div>

    <div className="about-content">
      {photo !== "" && (
        <div className="about-image">
          <img src={photo} alt="Yadhu Krishna" />
        </div>
      )}

      <div className="about-text">
        <h2>
          I&apos;m Yadhu, a full-stack developer focused on building modern web
          experiences.
        </h2>

        <p>
          I enjoy turning ideas into useful, well-designed products. I work
          across the frontend and backend, focusing on clean interfaces,
          reliable functionality, and a smooth user experience.
        </p>

        <p>
          I&apos;m constantly experimenting with new technologies and building
          projects that help me improve as a developer.
        </p>
      </div>
    </div>
  </section>
);

export default About;
