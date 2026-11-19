import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Web Design', 'Development', 'Editorial'];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects = filterProjects(PROJECTS, activeCategory);

  return (
    <section
      id="projects"
      className="border-b border-[#141413]/14 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Editorial 3-part section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 pb-10 border-b border-[#141413]/12"
        >
          <div className="lg:col-span-4">
            <h2 className="leading-[0.94] uppercase">
              <span className="block text-2xl sm:text-3xl font-medium tracking-[0.04em] text-[#141413]">
                SELECTED
              </span>
              <span className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#C85C3B]">
                PROJECTS
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-[#57544E]">
              A curated selection of recent work showcasing design, development,
              and problem-solving across editorial and brand platforms.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="group inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 text-[#C85C3B] transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>

        {/* Clean segmented category filter buttons */}
        <div
          role="group"
          aria-label="Filter projects by discipline"
          className="mt-6 mb-9 flex flex-wrap items-center gap-2"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-[0.08em] uppercase border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85C3B] ${
                  isActive
                    ? 'border-[#141413] bg-[#141413] text-[#F5F1EB]'
                    : 'border-[#141413]/15 bg-transparent text-[#57544E] hover:border-[#141413] hover:text-[#141413]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 4-Column Desktop Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {visibleProjects.map((project, index) => {
            const hasFailed = failedImages[project.id];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`View case study ${project.number}: ${project.title}`}
                  className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
                >
                  {/* Thumbnail with subtle zoom & transparent scrim overlay */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#141413]/14 bg-[#ECE6DC]">
                    {!hasFailed ? (
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle} preview`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [project.id]: true,
                          }))
                        }
                        className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#141413] p-4 text-center text-[#F5F1EB]">
                        <span className="font-serif text-xl">{project.title}</span>
                        <span className="mt-1 text-xs text-[#F5F1EB]/70">
                          {project.subtitle}
                        </span>
                      </div>
                    )}

                    {/* Hover transparent scrim + arrow affordance */}
                    <div className="absolute inset-0 flex items-end justify-between bg-[#141413]/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-[#141413]/45 group-hover:opacity-100">
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#F5F1EB]">
                        Case Study
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center bg-[#F5F1EB] text-[#141413] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  {/* Number, Title, Category & Description */}
                  <div className="mt-4 flex items-start gap-3">
                    <span className="font-serif text-2xl sm:text-[1.75rem] leading-none text-[#C85C3B] tabular-nums shrink-0 pt-0.5">
                      {project.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-semibold text-[#141413] transition-transform duration-200 group-hover:translate-x-1 truncate">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5 shrink-0 text-[#C85C3B] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      </div>
                      <p className="mt-0.5 text-xs text-[#57544E]">
                        {project.subtitle} <span aria-hidden="true">·</span>{' '}
                        {project.category}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-[#57544E]/90">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
