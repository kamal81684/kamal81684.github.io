"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const rise = (delay: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } });

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <motion.div {...rise(0)} className="label flex items-center justify-between">
        <span>Portfolio — {profile.location}</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Open to opportunities
        </span>
      </motion.div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-14">
        <div>
          <motion.h1 {...rise(0.08)} className="font-serif text-[clamp(4rem,13vw,10rem)] leading-[0.86] tracking-[-0.03em]">
            {first}
            <br />
            <em className="text-accent">{rest.join(" ")}</em>
          </motion.h1>
          <motion.p {...rise(0.18)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            <span className="text-fg">{profile.role}.</span> {profile.headline}
          </motion.p>
          <motion.div {...rise(0.26)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-solid">
              View work <ArrowRight className="h-4 w-4" />
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-line">
                Resume
              </a>
            ) : (
              <a href="#contact" className="btn-line">
                Get in touch
              </a>
            )}
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="label inline-flex sm:ml-2 items-center gap-1 transition-colors hover:text-fg">
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href={`mailto:${profile.email}`} className="label inline-flex items-center gap-1 transition-colors hover:text-fg">
              Email <ArrowUpRight className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        <motion.figure {...rise(0.14)} className="w-full max-w-[18rem] justify-self-center md:justify-self-end">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-card p-2">
            <Image src={profile.image} alt={profile.name} width={500} height={625} priority className="aspect-[4/5] w-full rounded-[1.25rem] object-cover" />
          </div>
          <figcaption className="label mt-3 flex justify-between">
            <span>IIT (BHU), Varanasi</span>
            <span>CSE</span>
          </figcaption>
        </motion.figure>
      </div>

      <motion.dl {...rise(0.34)} className="mt-16 grid grid-cols-2 border-y border-line sm:grid-cols-4">
        {profile.stats.map((s, i) => (
          <div key={s.label} className={`px-1 py-6 sm:px-6 ${i % 2 ? "border-l" : ""} ${i >= 2 ? "border-t sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""} border-line`}>
            <dd className="font-serif text-5xl leading-none tracking-tight">{s.value}</dd>
            <dt className="label mt-3">{s.label}</dt>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
