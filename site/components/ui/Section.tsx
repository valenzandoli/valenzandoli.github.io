export function Section({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-[900px] px-6 py-20 sm:px-12 sm:py-28">
      {children}
    </section>
  );
}
