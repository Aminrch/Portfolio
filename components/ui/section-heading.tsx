type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
