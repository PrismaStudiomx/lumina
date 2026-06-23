type SectionLabelProps = {
  eyebrow: string;
  label: string;
};

export function SectionLabel({ eyebrow, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--smoked-champagne)]">
      <span className="text-[var(--clay)]">{eyebrow}</span>
      <span className="h-px w-10 bg-[rgba(216,191,166,0.38)]" />
      <span>{label}</span>
    </div>
  );
}