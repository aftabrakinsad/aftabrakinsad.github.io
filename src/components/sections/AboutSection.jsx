import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import { Reveal } from "../ui/Reveal";

/**
 * AboutSection — bio, stats grid, and categorized skills.
 */
export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <Reveal>
        <div className="section-label">About Me</div>
      </Reveal>
      <Reveal delay="reveal-d1">
        <h2 id="about-heading" className="section-heading">
          Who <span className="ghost">I Am</span>
        </h2>
      </Reveal>
      <Reveal delay="reveal-d2">
        <p className="section-subtitle">
          A developer who believes great software lives at the intersection of
          engineering excellence and thoughtful design.
        </p>
      </Reveal>

      <Reveal delay="reveal-d2">
        <div className="about-bio">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay="reveal-d3">
        <div className="stat-grid">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-card-value">{stat.value}</div>
              <div className="stat-card-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay="reveal-d4">
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <div className="skill-group-title">{group.category}</div>
              {group.items.map((item) => (
                <div key={item} className="skill-item">
                  <span className="skill-dot" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
