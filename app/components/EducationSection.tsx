import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="05" eyebrow="Academics" title="Education" />
      <div className="mt-12">
        {education.map((edu) => (
          <Reveal key={edu.id} className="grid gap-2 border-t border-line py-8 md:grid-cols-[13rem_1fr_auto] md:items-baseline md:gap-10">
            <div className="label">{edu.startDate ? `${edu.startDate} — ${edu.endDate}` : edu.endDate}</div>
            <div>
              <h3 className="font-serif text-3xl leading-tight tracking-tight">{edu.institution}</h3>
              <p className="mt-1 text-muted">{edu.degree}</p>
            </div>
            <div className="font-mono text-sm text-fg">{edu.grade}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
