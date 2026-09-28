import React from 'react';

export type EntityKind = 'movement' | 'person' | 'object' | 'story' | 'place';
export type EntityLinkVariant = 'chip' | 'action' | 'card';

interface EntityLinkProps {
  kind: EntityKind;
  label: string;
  onActivate: () => void;
  variant?: EntityLinkVariant;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

const variantClasses: Record<EntityLinkVariant, string> = {
  chip:
    'font-mono text-[10px] uppercase px-2.5 py-1 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] text-[var(--atlas-text)] hover:bg-[var(--atlas-text)] hover:text-[var(--atlas-bg)] hover:border-[var(--atlas-text)] transition-colors',
  action:
    'font-mono text-[10px] uppercase tracking-wider px-3 py-2 border border-[var(--atlas-text)] text-[var(--atlas-text)] bg-transparent hover:bg-[var(--atlas-text)] hover:text-[var(--atlas-bg)] transition-colors',
  card:
    'group w-full text-left border border-[var(--atlas-border)] bg-[var(--atlas-surface)] hover:border-[var(--atlas-text)] focus-visible:border-[var(--atlas-text)] transition-colors',
};

export const EntityLink: React.FC<EntityLinkProps> = ({
  kind,
  label,
  onActivate,
  variant = 'chip',
  className = '',
  ariaLabel,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onActivate}
      data-entity-kind={kind}
      data-entity-label={label}
      aria-label={ariaLabel ?? `Open ${kind}: ${label}`}
      className={`cursor-pointer ${variantClasses[variant]} ${className}`.trim()}
    >
      {children ?? (
        <>
          <span>{label}</span>
          <span aria-hidden="true"> →</span>
        </>
      )}
    </button>
  );
};
