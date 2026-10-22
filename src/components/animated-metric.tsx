import { motion, useInView, useMotionValueEvent, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface AnimatedMetricProps {
  before?: string;
  after: string;
  description: string;
}

function splitValue(value: string) {
  const match = value.match(/(-?\d[\d,]*(?:\.\d+)?)/);
  if (!match || match.index === undefined) return null;

  const numericValue = Number(match[1].replace(/,/g, ""));
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const usesGrouping = match[1].includes(",");

  return {
    target: numericValue,
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + match[1].length),
    decimals,
    usesGrouping,
  };
}

function formatValue(value: number, decimals: number, usesGrouping: boolean) {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
    useGrouping: usesGrouping,
  });
}

export function AnimatedMetric({ before, after, description }: AnimatedMetricProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });
  const parsedAfter = useMemo(() => splitValue(after), [after]);
  const spring = useSpring(0, { stiffness: 90, damping: 20, mass: 0.8 });
  const [currentValue, setCurrentValue] = useState(0);

  useMotionValueEvent(spring, "change", (value) => setCurrentValue(value));

  useEffect(() => {
    if (!isInView || !parsedAfter || reducedMotion) return;
    spring.set(parsedAfter.target);
  }, [isInView, parsedAfter, reducedMotion, spring]);

  const renderedAfter = parsedAfter
    ? `${parsedAfter.prefix}${formatValue(reducedMotion ? parsedAfter.target : currentValue, parsedAfter.decimals, parsedAfter.usesGrouping)}${parsedAfter.suffix}`
    : after;

  return (
    <div ref={containerRef}>
      <div className="text-[32px] font-medium text-black tracking-tight">
        {before && (
          <motion.span
            className="inline-block text-[#737373]"
            initial={reducedMotion ? { opacity: 0.55, textDecoration: "line-through" } : { opacity: 1, textDecoration: "none" }}
            animate={isInView ? { opacity: 0.45, textDecoration: "line-through" } : undefined}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {before}
          </motion.span>
        )}
        {before && <span className="mx-2 text-[#B5B5B5]">→</span>}
        <motion.span
          className="inline-block"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.3, delay: before ? 0.18 : 0, ease: "easeOut" }}
        >
          {renderedAfter}
        </motion.span>
      </div>
      <p className="text-sm text-[#525252] mt-1">{description}</p>
    </div>
  );
}

export default AnimatedMetric;
