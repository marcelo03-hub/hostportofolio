import { motion } from 'motion/react';
import { Code2, Monitor, Smartphone, Zap } from 'lucide-react';
import {
  SKILLS,
  SKILLS_QUOTE,
  STRENGTHS,
  type StrengthItem,
} from '../data/portfolioData';

function StrengthIcon({ icon }: { icon: StrengthItem['icon'] }) {
  switch (icon) {
    case 'monitor':
      return <Monitor className="h-4 w-4" aria-hidden="true" />;
    case 'code':
      return <Code2 className="h-4 w-4" aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className="h-4 w-4" aria-hidden="true" />;
    case 'zap':
      return <Zap className="h-4 w-4" aria-hidden="true" />;
  }
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-[#141413]/14 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          {/* Left Column: Heading & Animated Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pr-10"
          >
            <h2 className="leading-[0.94] uppercase">
              <span className="block text-2xl sm:text-3xl font-medium tracking-[0.04em] text-[#141413]">
                SKILLS &amp;
              </span>
              <span className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#C85C3B]">
                EXPERTISE
              </span>
            </h2>

            <ul className="mt-8 space-y-5" aria-label="Technical skills proficiency">
              {SKILLS.map((skill, idx) => (
                <li key={skill.name}>
                  <div className="flex items-baseline justify-between gap-4 text-xs">
                    <span className="font-medium tracking-[0.08em] uppercase text-[#141413]">
                      {skill.name}
                    </span>
                    <span className="font-medium text-[#57544E] tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-2 h-[2px] w-full overflow-hidden bg-[#141413]/14">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.85,
                        delay: idx * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ transformOrigin: 'left' }}
                      className="h-full w-full bg-[#C85C3B]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center Column: Large Editorial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:border-l lg:border-r lg:border-[#141413]/14 lg:px-10 flex flex-col justify-center"
          >
            <span
              aria-hidden="true"
              className="font-serif text-7xl leading-none text-[#C85C3B]/35 select-none"
            >
              &ldquo;
            </span>
            <blockquote className="-mt-4 font-serif text-2xl sm:text-[1.75rem] leading-[1.34] text-[#141413]">
              {SKILLS_QUOTE}
            </blockquote>
          </motion.div>

          {/* Right Column: 4 Key Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pl-10 flex flex-col justify-center"
          >
            <ul className="space-y-6">
              {STRENGTHS.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C85C3B] text-[#F5F1EB]">
                    <StrengthIcon icon={item.icon} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#141413]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#57544E]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
