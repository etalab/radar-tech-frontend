import React from 'react';

interface SectionHeaderProps {
  copy: string;
}

export const SectionHeader = ({ copy }: SectionHeaderProps) => <h1>{copy}</h1>;
