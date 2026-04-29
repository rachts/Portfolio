export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0f0f]">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-t-2 border-indigo-500 border-r-2 border-transparent animate-spin" />
          <div className="absolute w-10 h-10 rounded-full border-b-2 border-cyan-400 border-l-2 border-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse" />
        </div>
        
        <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase animate-pulse">
          Initializing Interface
        </div>
      </div>
    </div>
  )
}
