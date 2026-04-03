type SectionProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className }: SectionProps) => {
  const baseClasses = "min-h-screen flex items-center scroll-mt-24";

  return (
    <section id={id} className={`${baseClasses} ${className || ""}`}>
      <div className="max-w-6xl mx-auto w-full">
        {title && <h2 className="text-4xl font-bold mb-8">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
