export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
