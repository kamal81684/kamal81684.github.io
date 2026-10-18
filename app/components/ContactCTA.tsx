import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function ContactCTA() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8">
      <Reveal className="border-t border-line pt-6">
        <div className="label">06 / Contact</div>
        <h2 className="mt-8 font-serif text-[clamp(3.25rem,10vw,8.5rem)] leading-[0.9] tracking-[-0.03em]">
          Let&apos;s build
          <br />
          <em className="text-accent">something good.</em>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-muted">
          I&apos;m looking for software engineering roles and always happy to talk about full-stack, AI or competitive programming.
        </p>
        <a href={`mailto:${profile.email}`} className="link-underline mt-8 inline-block break-all font-serif text-3xl sm:text-5xl">
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            ["GitHub", profile.socials.github],
            ["LinkedIn", profile.socials.linkedin],
            ["Instagram", profile.socials.instagram],
          ]
            .filter(([, url]) => url)
            .map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" className="label inline-flex items-center gap-1 text-fg transition-colors hover:text-accent">
                {label} <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
        </div>
      </Reveal>
      <footer className="label mt-24 flex flex-col justify-between gap-2 border-t border-line pt-6 sm:flex-row">
        <span>© {year} {profile.name}</span>
        <span>Built with Next.js · Tailwind CSS</span>
      </footer>
    </section>
  );
}
