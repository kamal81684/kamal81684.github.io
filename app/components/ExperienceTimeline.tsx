import { experiences, sections } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Magazine-style rows: dates in the margin, company as the headline.
export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="02" eyebrow="Career" title="Experience" subtitle={sections.experience} />
      <div className="mt-12">
        {experiences.map((exp) => (
          <Reveal key={exp.id} className="grid gap-4 border-t border-line py-10 md:grid-cols-[13rem_1fr] md:gap-10">
            <div className="label pt-2">
              {exp.startDate} — {exp.endDate}
              {exp.current && <span className="ml-2 text-accent">· Now</span>}
            </div>
            <div>
              <h3 className="font-serif text-4xl leading-tight tracking-tight">{exp.company}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">{exp.position}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">{exp.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
