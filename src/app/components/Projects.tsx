import "../styles/projects.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive developer portfolio showcasing projects, skills, and experience with a strong focus on clean UI and performance.",
    tech: ["Next.js", "React", "CSS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with authentication and CRUD operations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
  },
  {
    title: "REST API for Notes",
    description:
      "A RESTful API for managing notes with proper validation and error handling.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
          A selection of projects where I applied my skills to build real-world
          applications.
        </p>
      </div>

      {/* FEATURED PROJECT */}
      {projects
        .filter((p) => p.featured)
        .map((project) => (
          <div key={project.title} className="project-featured">
            <div className="project-featured-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank">GitHub</a>
                <a href={project.live} target="_blank">Live</a>
              </div>
            </div>
          </div>
        ))}

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank">GitHub</a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
