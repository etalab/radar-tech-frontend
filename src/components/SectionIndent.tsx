import React, { ReactNode } from 'react';

interface SectionIndentProps {
  children: {
    header?: ReactNode;
    copy: ReactNode;
  };
}

const shadow =
  '-2.8px 0 2.2px rgba(0, 0, 0, 0.034),\
   -6.7px 0 5.3px rgba(0, 0, 0, 0.048),\
   -12.5px 0 10px rgba(0, 0, 0, 0.06),\
   -22.3px 0 17.9px rgba(0, 0, 0, 0.072),\
   -41.8px 0 33.4px rgba(0, 0, 0, 0.086),\
   -100px 0 80px rgba(0, 0, 0, 0.12)';

export const SectionIndent = ({ children }: SectionIndentProps) => (
  <div
    style={{
      borderRadius: '5px',
      boxShadow: shadow,
      padding: '2rem 4rem',
      margin: '2rem 0',
    }}
  >
    {children.header ? (
      <h3 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
        {children.header}
      </h3>
    ) : null}
    <div
      style={{
        borderLeft: '5px dotted #000091',
        padding: '0 2rem',
      }}
    >
      {children.copy}
    </div>
  </div>
);
