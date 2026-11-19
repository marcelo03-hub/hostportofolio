import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function SubtleCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 380, damping: 32, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 380, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, textarea');
      setHoveringInteractive(Boolean(interactive));
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [rawX, rawY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{
        scale: hoveringInteractive ? 1.65 : 1,
        opacity: hoveringInteractive ? 0.85 : 0.45,
      }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className="pointer-events-none fixed top-0 left-0 z-50 -ml-3 -mt-3 h-6 w-6 rounded-full border border-[#C85C3B] mix-blend-multiply hidden lg:block"
    />
  );
}
