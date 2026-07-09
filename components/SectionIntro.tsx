type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionIntro({ eyebrow, title, copy }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.34em] text-champagne">{eyebrow}</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-linen sm:text-5xl lg:text-6xl">{title}</h1>
      {copy ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{copy}</p> : null}
    </div>
  );
}
