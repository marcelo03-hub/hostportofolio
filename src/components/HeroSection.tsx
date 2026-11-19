import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle compositor-only parallax on scroll
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, 26]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 42]);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#141413]/14 pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pb-24"
    >
      {/* Left & Right subtle vertical margin labels matching editorial broadsheet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-28 hidden xl:flex flex-col items-center gap-4 text-[10px] font-medium tracking-[0.22em] uppercase text-[#57544E]"
      >
        <span style={{ writingMode: 'vertical-rl' }} className="rotate-180">
          UI / UX DESIGN
        </span>
        <span className="h-10 w-[1px] bg-[#141413]/25" />
        <span style={{ writingMode: 'vertical-rl' }} className="rotate-180">
          WEB DEVELOPMENT
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-40 hidden xl:flex flex-col items-center gap-4 text-[10px] font-medium tracking-[0.22em] uppercase text-[#57544E]"
      >
        <span style={{ writingMode: 'vertical-rl' }}>BRANDING</span>
        <span className="h-10 w-[1px] bg-[#141413]/25" />
        <span style={{ writingMode: 'vertical-rl' }}>DIGITAL EXPERIENCES</span>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Giant Monumental Editorial Masthead */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%', opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-center uppercase text-[#141413] tracking-[-0.015em] leading-[0.84] select-none text-[22.5vw] sm:text-[22vw] lg:text-[min(21vw,292px)]"
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* Overlapping Split Layout below / intersecting PORTFOLIO */}
        <div className="relative mt-6 sm:mt-8 lg:mt-4 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* Left Editorial Bio Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.09, delayChildren: 0.2 },
              },
            }}
            className="lg:col-span-5 lg:pt-12 order-2 lg:order-1"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#141413]"
            >
              {PORTFOLIO_PROFILE.greeting}
            </motion.p>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-2 font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-medium uppercase leading-[0.92] tracking-tight text-[#141413]"
            >
              {PORTFOLIO_PROFILE.fullNameLines[0]}
              <br />
              {PORTFOLIO_PROFILE.fullNameLines[1]}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#C85C3B]"
            >
              {PORTFOLIO_PROFILE.roleSubtitle}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-5 max-w-sm text-[15px] leading-[1.65] text-[#57544E]"
            >
              {PORTFOLIO_PROFILE.bio}
            </motion.p>

            {/* Editorial Handwritten SVG Signature */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-6 flex flex-wrap items-center gap-7"
            >
              <svg
                aria-label="Alex Morgan signature"
                viewBox="0 0 180 48"
                className="h-9 w-36 text-[#141413]/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 36 C20 14, 28 8, 30 34 M16 26 L32 23 M42 12 L38 35 M48 24 C52 20, 58 28, 52 33 C47 36, 46 28, 56 26 L68 20 L62 34 L74 22 C78 22, 82 32, 88 28 C94 24, 98 16, 102 32 C104 24, 112 18, 115 29 C119 23, 126 20, 130 28 C136 22, 142 23, 150 25 C158 27, 166 24, 172 22" />
              </svg>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center gap-2.5 border border-[#141413] bg-[#141413] px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F1EB] transition-colors duration-200 hover:bg-[#C85C3B] hover:border-[#C85C3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Overlapping Portrait + Terracotta Circle Composition */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end order-1 lg:order-2 lg:-mt-16 xl:-mt-20">
            <div className="relative flex items-center justify-center w-full max-w-[460px] sm:max-w-[540px] pt-6 pb-4">
              {/* Terracotta geometric backdrop circle with scroll parallax */}
              <motion.div
                style={{ y: circleY }}
                initial={{ scale: 0.86, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
                className="absolute -left-2 sm:left-0 bottom-10 sm:bottom-12 h-[270px] w-[270px] sm:h-[370px] sm:w-[370px] rounded-full bg-[#C85C3B]"
              />

              {/* Arched Editorial Portrait overlapping PORTFOLIO */}
              <motion.div
                style={{ y: portraitY }}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[260px] sm:w-[330px] aspect-[3/4] overflow-hidden rounded-t-full border border-[#141413]/15 bg-[#ECE6DC] shadow-[0_20px_50px_rgba(20,20,19,0.08)]"
              >
                {!imgError ? (
                  <img
                    src={PORTFOLIO_PROFILE.heroPortrait}
                    alt="Alex Morgan, Web Developer and Digital Creative"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-[#ECE6DC] p-6 text-center">
                    <span className="font-serif text-4xl text-[#141413]">AM</span>
                    <span className="mt-2 text-xs tracking-widest uppercase text-[#57544E]">
                      Alex Morgan
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Circular Stamp Badge ("OPEN FOR NEW PROJECTS") */}
              <motion.button
                type="button"
                onClick={() => scrollToSection('#projects')}
                style={{ rotate: badgeRotate }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Open for new projects, scroll to selected projects"
                className="group absolute right-0 sm:right-2 bottom-10 sm:bottom-14 z-20 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border border-[#141413]/15 bg-[#F5F1EB] shadow-sm transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85C3B]"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full text-[#141413]"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="hero-stamp-circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-current text-[6.7px] font-semibold uppercase tracking-[0.17em]">
                    <textPath href="#hero-stamp-circle">
                      AVAILABLE WORLDWIDE · AVAILABLE WORLDWIDE ·{' '}
                    </textPath>
                  </text>
                </svg>
                <span className="px-3 text-center text-[8px] sm:text-[9px] font-bold leading-tight tracking-[0.08em] uppercase text-[#C85C3B] group-hover:text-[#141413] transition-colors">
                  OPEN FOR
                  <br />
                  NEW
                  <br />
                  PROJECTS
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
