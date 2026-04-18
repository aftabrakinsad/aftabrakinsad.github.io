import { research } from "../../data/research";
import { Reveal } from "../ui/Reveal";
import { ResearchCard } from "../ui/ResearchCard";

/**
 * ResearchSection — publications rendered as a responsive card grid,
 * mirroring the Projects section layout per design spec.
 */
export function ResearchSection() {
  return (
    <section className="section" id="research" aria-labelledby="research-heading">
      <Reveal>
        <div className="section-label">Research &amp; Publications</div>
      </Reveal>
      <Reveal delay="reveal-d1">
        <h2 id="research-heading" className="section-heading">
          Research <span className="ghost">Papers</span>
        </h2>
      </Reveal>
      <Reveal delay="reveal-d2">
        <p className="section-subtitle">
          Academic publications and technical writing on frontend architecture,
          distributed systems, and developer experience.
        </p>
      </Reveal>

      <div className="card-grid">
        {research.map((paper, i) => (
          <Reveal key={paper.title} delay={`reveal-d${Math.min(i + 1, 6)}`}>
            <ResearchCard paper={paper} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
