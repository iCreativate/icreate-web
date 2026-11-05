export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      {kicker ? (
        <p className="font-mono text-xs tracking-[0.2em] text-accent-ink uppercase">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-strong sm:text-4xl">
        {title}
      </h1>
      <div className="mt-4 text-base leading-relaxed text-muted">{children}</div>
    </header>
  );
}
