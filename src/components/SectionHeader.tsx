import React from 'react';

interface SectionHeaderProps {
  copy: string;
}

export const SectionHeader = ({ copy }: SectionHeaderProps) => (
  <h1 style={{ marginBottom: '0.7rem' }}>{copy}</h1>
);
