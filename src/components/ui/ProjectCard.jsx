import { GithubIcon, ExternalIcon } from "../icons/Icons";

/**
 * ProjectCard — visual card for a featured project.
 */
export function ProjectCard({ project }) {
  const { title, subtitle, description, tech, color, year, demo, source } = project;

  return (
    <article className="project-card">
      <div className="card-visual">
        <div
          className="card-visual-bg"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
          }}
        />
        <div
          className="card-visual-icon"
          style={{ borderColor: color, color: color }}
          aria-hidden="true"
        >
          {title[0]}
        </div>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>{year}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <div className="card-subtitle">{subtitle}</div>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tech.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
        <div className="card-links">
          <a href={demo} className="card-link" target="_blank" rel="noopener noreferrer">
            Live Demo <ExternalIcon />
          </a>
          <a href={source} className="card-link" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> Source
          </a>
        </div>
      </div>
    </article>
  );
}
