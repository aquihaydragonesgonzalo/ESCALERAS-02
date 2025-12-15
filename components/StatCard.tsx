import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  subLabel?: string;
  colorClass?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subLabel, colorClass = "text-white" }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg border border-slate-700">
      <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">{label}</span>
      <span className={`text-3xl font-bold ${colorClass}`}>{value}</span>
      {subLabel && <span className="text-slate-500 text-xs mt-1">{subLabel}</span>}
    </div>
  );
};