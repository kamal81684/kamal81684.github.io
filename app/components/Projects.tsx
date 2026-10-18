import { ArrowUpRight } from "lucide-react";
import { projects, sections } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="03" eyebrow="Selected work" title="Projects" subtitle={sections.projects} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="group flex flex-col rounded-3xl border border-line bg-card p-8 transition-colors hover:border-fg/30">
            <div className="label flex justify-between">
              <span>Project {String(i + 1).padStart(2, "0")}</span>
              <span>{p.tags[0]}</span>
            </div>
            <h3 className="mt-10 font-serif text-5xl leading-none tracking-tight">{p.title}</h3>
            <p className="mt-5 flex-1 leading-relaxed text-muted">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            {(p.link || p.repo) && (
              <div className="mt-8 flex gap-6 border-t border-line pt-5">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="label inline-flex items-center gap-1 text-fg transition-colors hover:text-accent">
                    Live <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="label inline-flex items-center gap-1 text-fg transition-colors hover:text-accent">
                    Source code <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
