import { achievements } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="04" eyebrow="Honours" title="Achievements" subtitle="Competitive programming, selective programmes and hackathons." />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10">
        {achievements.map((a, i) => (
          <Reveal key={a.id} delay={(i % 3) * 0.05} className="border-t border-line py-7">
            <div className="label">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-3 font-serif text-3xl leading-tight tracking-tight">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
