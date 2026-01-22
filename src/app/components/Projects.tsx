import "../styles/projects.css";

const projects = [
  {
  title: "Dragon Repeller – RPG Game",
  description:
    "A browser-based RPG game inspired by classic Pokémon-style combat. Features turn-based battles, animated characters, weapon progression, and responsive design built with React.",
  tech: ["React", "JavaScript", "CSS", "Vite", "LocalStorage"],
  github: "https://github.com/sohanjadyal/RPG_game",
  live: "https://rpg-game-sigma.vercel.app/",
  featured: true,
  },
  {
  title: "F1 Race Insights Dashboard",
  description:
    "A data-driven Formula 1 analytics dashboard that visualizes race results, lap times, and driver performance using real F1 telemetry data.",
  tech: [
    "Python",
    "FastF1",
    "Flask",
    "SQLite",
    "Plotly"
  ],
  github: "https://github.com/sohanjadyal/f1-race-insights",
  live: "https://f1-race-insights.streamlit.app",
  featured: true,
},
  {
  title: "Movie Database App",
  description:
    "A responsive movie search and discovery web app built using the OMDb API, allowing users to search, filter, and explore movies with real-time data.",
  tech: ["HTML", "CSS", "JavaScript", "OMDb API"],
  github: "https://github.com/sohanjadyal/movie_database",
  live: "https://moviedatabase-murex.vercel.app/",
  featured: true,
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
