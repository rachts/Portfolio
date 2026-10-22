const DAYS = Array.from({ length: 364 }, (_, index) => ({
  index,
  level: (index * 17 + Math.floor(index / 7) * 3) % 5,
}));

export function ContributionGraph() {
  return (
    <div className="mt-5 hidden max-w-[26rem] md:block" aria-label="Static contribution activity graph">
      <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-white/40"><span>Contribution activity</span><span>3,859 synced</span></div>
      <div className="grid grid-flow-col grid-rows-7 gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-3">
        {DAYS.map((day) => <span key={day.index} title={`Contribution activity day ${day.index + 1}`} className={`h-2 w-2 rounded-[2px] ${day.level === 0 ? "bg-white/10" : day.level === 1 ? "bg-[#ffb08d]" : day.level === 2 ? "bg-[#ff8a5b]" : day.level === 3 ? "bg-[#ff6d35]" : "bg-[#ff5a1f]"}`} />)}
      </div>
    </div>
  );
}

export default ContributionGraph;
