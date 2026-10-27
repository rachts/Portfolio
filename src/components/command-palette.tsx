import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

const destinations = [
  { label: "Work", id: "work" }, { label: "About", id: "about" }, { label: "Skills", id: "skills" },
  { label: "Certifications", id: "certifications" }, { label: "Experience", id: "experience" }, { label: "Contact", id: "contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const reduced = useReducedMotion();
  const results = useMemo(() => [
    ...destinations.map((item) => ({ ...item, type: "Section" })),
    ...projects.map((project) => ({ label: project.title, id: "work", type: "Project" })),
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase())), [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(true); }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); setOpen(false); setQuery(""); };

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-30 hidden items-center gap-2 rounded-full border border-[#D4D4D4] bg-white/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#737373] shadow-sm backdrop-blur md:flex" aria-label="Open command palette">
        <span>⌘ K</span><span className="text-[#B5B5B5]">Command</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/20 px-4 pt-[16vh] backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setOpen(false)}>
            <motion.div role="dialog" aria-modal="true" aria-label="Command palette" className="w-full max-w-xl overflow-hidden rounded-2xl border border-[#D4D4D4] bg-white shadow-2xl" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }} onMouseDown={(event) => event.stopPropagation()}>
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Jump to a section or project..." className="w-full border-b border-[#E5E5E5] bg-transparent px-5 py-4 text-sm outline-none" />
              <div className="max-h-72 overflow-y-auto p-2">
                {results.map((item) => <button key={`${item.type}-${item.label}`} onClick={() => go(item.id)} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm hover:bg-[#F5F5F7]"><span>{item.label}</span><span className="text-[10px] uppercase tracking-widest text-[#A3A3A3]">{item.type}</span></button>)}
                {results.length === 0 && <p className="px-3 py-6 text-sm text-[#737373]">No matching systems found.</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CommandPalette;
