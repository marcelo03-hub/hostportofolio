import { AnimatePresence, motion } from 'motion/react';

interface PreloaderProps {
  visible: boolean;
}

export function Preloader({ visible }: PreloaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="editorial-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F1EB] px-6"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl sm:text-8xl tracking-tight text-[#141413] uppercase select-none"
            >
              PORTFOLIO
            </motion.p>
          </div>
          <div className="mt-4 h-[1px] w-44 overflow-hidden bg-[#141413]/15">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-[#C85C3B]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
