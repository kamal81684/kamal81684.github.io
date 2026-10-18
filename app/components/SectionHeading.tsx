import Reveal from "./Reveal";

interface Props {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

// Editorial section opener: hairline rule, numbered mono label, oversized serif title.
export default function SectionHeading({ index, eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="border-t border-line pt-6">
      <div className="label">
        {index} / {eyebrow}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_minmax(0,22rem)] md:items-end">
        <h2 className="font-serif text-5xl leading-none tracking-tight sm:text-7xl">{title}</h2>
        {subtitle && <p className="text-muted md:text-right">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
