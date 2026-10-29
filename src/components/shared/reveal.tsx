import * as motion from "motion/react-client";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/** Fade-and-rise on first scroll into view. Server-renderable via motion/react-client. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;
  // Normalize millisecond inputs (e.g. 70, 140) into seconds for motion/react
  const delaySec = delay > 3 ? delay / 1000 : delay;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: delaySec, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
