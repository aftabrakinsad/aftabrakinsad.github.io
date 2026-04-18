import { experience, education } from "../../data/experience";
import { Reveal } from "../ui/Reveal";

/**
 * ResumeSection — work history timeline + education grid.
 */
export function ResumeSection() {
  return (
    <section className="section" id="resume" aria-labelledby="resume-heading">
      <Reveal>
        <div className="section-label">Resume</div>
      </Reveal>
      <Reveal delay="reveal-d1">
        <h2 id="resume-heading" className="section-heading">
          Work <span className="ghost">History</span>
        </h2>
      </Reveal>
      <Reveal delay="reveal-d2">
        <p className="section-subtitle">
          My professional journey through product-focused engineering roles.
        </p>
      </Reveal>

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company + i} delay={`reveal-d${Math.min(i + 1, 4)}`}>
            <div className="timeline-item">
              <div className="timeline-period">{job.period}</div>
              <div>
                <h3 className="timeline-role">{job.role}</h3>
                <div className="timeline-company">{job.company}</div>
                <p className="timeline-desc">{job.description}</p>
                <div className="timeline-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay="reveal-d3">
        <h3 className="education-subhead">Education</h3>
      </Reveal>
      <Reveal delay="reveal-d4">
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.school} className="education-card">
              <div className="education-degree">{edu.degree}</div>
              <div className="education-school">{edu.school}</div>
              <div className="education-year">{edu.year}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
