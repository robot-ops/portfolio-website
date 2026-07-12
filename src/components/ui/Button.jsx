export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 active:scale-95 group';

  const variants = {
    primary: 'bg-bamboo text-white hover:bg-bamboo/90 shadow-lg shadow-bamboo/20 hover:shadow-bamboo/30',
    outline: 'border border-bamboo/40 text-bamboo hover:bg-bamboo/10 hover:border-bamboo/60',
    ghost: 'border border-border-subtle text-text-secondary hover:text-sage hover:border-sage/30',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
}
