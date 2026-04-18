import { projects } from "../../data/projects";
import { Reveal } from "../ui/Reveal";
import { ProjectCard } from "../ui/ProjectCard";

/**
 * ProjectsSection — responsive card grid of featured projects.
 */
export function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <Reveal>
        <div className="section-label">Projects</div>
      </Reveal>
      <Reveal delay="reveal-d1">
        <h2 id="projects-heading" className="section-heading">
          Selected <span className="ghost">Work</span>
        </h2>
      </Reveal>
      <Reveal delay="reveal-d2">
        <p className="section-subtitle">
          A curated selection of projects I've built — from design systems to IoT platforms.
        </p>
      </Reveal>

      <div className="card-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={`reveal-d${Math.min(i + 1, 6)}`}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
