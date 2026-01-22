import "../styles/skills.css";

export default function CoreSkills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Core Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Backend & APIs</h3>
          <p>
            Designing REST APIs, authentication, business logic, and scalable
            backend systems.
          </p>
          <span>Node.js · Express · API Design</span>
        </div>

        <div className="skill-card">
          <h3>Databases & Data</h3>
          <p>
            Working with structured data, schema design, and efficient queries.
          </p>
          <span>PostgreSQL · MongoDB · SQL</span>
        </div>

        <div className="skill-card">
          <h3>Web & Frontend</h3>
          <p>
            Building clean, responsive interfaces with attention to UX.
          </p>
          <span>React · Next.js · CSS</span>
        </div>

        <div className="skill-card">
          <h3>Tools & Engineering</h3>
          <p>
            Writing maintainable code using modern tooling and workflows.
          </p>
          <span>Git · Linux · Docker · Debugging</span>
        </div>
      </div>
    </section>
  );
}
