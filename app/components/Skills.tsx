import { skillGroups, sections } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Bento grid with hairline gutters.
export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="01" eyebrow="Toolkit" title="Skills" subtitle={sections.skills} />
      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05} className="bg-bg p-7 transition-colors hover:bg-card">
            <g.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
            <h3 className="mt-5 font-serif text-3xl tracking-tight">{g.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
