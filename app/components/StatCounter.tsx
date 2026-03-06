"use client";

import { useEffect, useRef } from "react";

const STATCOUNTER_PROJECT_ID = 12106690;
const STATCOUNTER_SECURITY_CODE = "458e529a";
const STATCOUNTER_SCRIPT_SRC = "https://statcounter.com/counter/counter.js";

type StatCounterWindow = Window & {
  sc_project?: number;
  sc_invisible?: number;
  sc_security?: string;
  sc_text?: number;
};

export default function StatCounter() {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = window as StatCounterWindow;
    w.sc_project = STATCOUNTER_PROJECT_ID;
    w.sc_invisible = 0;
    w.sc_security = STATCOUNTER_SECURITY_CODE;
    w.sc_text = 2;

    // Inject script inline so StatCounter writes the counter right here
    const script = document.createElement("script");
    script.src = STATCOUNTER_SCRIPT_SRC;
    script.async = false;
    container.textContent = "";
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className="inline-block align-baseline [&_.statcounter]:inline [&_.statcounter]:align-baseline [&_a]:font-semibold [&_a]:text-zinc-700 [&_a]:no-underline"
      aria-label="Visitor count"
    />
  );
}
