"use client";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Beyond the code"
        title="Achievements"
        subtitle="Competitive programming, selective programmes and hackathons."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -6 }}
            className="flex items-start gap-4 rounded-2xl surface-card p-6 backdrop-blur-xl transition-colors hover:border-primary-400/50"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-500/30 to-accent-purple/30 text-primary-600 dark:text-primary-200">
              <Trophy className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{a.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
