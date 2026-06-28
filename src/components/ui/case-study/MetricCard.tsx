import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  isFullWidth?: boolean;
}

export function MetricCard({ value, label, isFullWidth }: MetricCardProps) {
  return (
    <div className={isFullWidth ? "col-span-2" : ""}>
      <div className="font-headline-md text-headline-md text-primary mb-1">{value}</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">{label}</div>
    </div>
  );
}
