import { motion, useReducedMotion } from "framer-motion";

export function ArchitectureDiagram() {
  const reduced = useReducedMotion();
  return <div className="mt-6 overflow-hidden rounded-xl border border-[#E5E5E5] bg-white p-4" aria-label="Client to edge to API to database architecture diagram">
    <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#737373]"><span>Request path</span><span>01 / 04</span></div>
    <svg viewBox="0 0 520 72" className="h-auto w-full" role="img">
      <path d="M44 36H476" stroke="#D4D4D4" strokeWidth="1" strokeDasharray="4 6" />
      {[[44, "CLIENT"], [188, "EDGE"], [332, "API"], [476, "DB"]].map(([x, label]) => <g key={String(label)}><circle cx={Number(x)} cy="36" r="12" fill="#0A0A0A" /><text x={Number(x)} y="40" textAnchor="middle" fontSize="8" fill="white">{label === "CLIENT" ? "C" : label === "EDGE" ? "E" : label === "API" ? "A" : "D"}</text><text x={Number(x)} y="65" textAnchor="middle" fontSize="8" fill="#737373" letterSpacing="1">{label}</text></g>)}
      {!reduced && <motion.circle r="4" fill="#ff5a1f" animate={{ cx: [44, 188, 332, 476, 44] }} cy="36" transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }} />}
    </svg>
  </div>;
}

export default ArchitectureDiagram;
