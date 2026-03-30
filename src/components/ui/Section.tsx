type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ id, children, className }: SectionProps) => {
  const baseClasses = "min-h-screen px-6 py-16 scroll-mt-10";
  return (
    <section id={id} className={`${baseClasses} ${className || ""}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
