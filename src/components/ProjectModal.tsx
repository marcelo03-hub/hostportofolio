import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function ProjectModal({
  project,
  onClose,
  onNavigate,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNavigate('next');
      } else if (event.key === 'ArrowLeft') {
        onNavigate('prev');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#141413]/70 p-4 sm:p-6 backdrop-blur-xs"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-[#141413]/20 bg-[#F5F1EB] text-[#141413] shadow-2xl"
          >
            {/* Top Modal Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#141413]/12 bg-[#F5F1EB]/95 px-6 py-4 backdrop-blur-xs">
              <div className="flex items-center gap-3 text-xs tracking-[0.14em] uppercase text-[#57544E]">
                <span className="font-serif text-lg text-[#C85C3B] tabular-nums">
                  {project.number}
                </span>
                <span aria-hidden="true">/</span>
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{project.year}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex h-9 w-9 items-center justify-center border border-[#141413]/15 text-[#141413] hover:border-[#141413] hover:bg-[#141413] hover:text-[#F5F1EB] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85C3B]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="aspect-[4/3] w-full overflow-hidden border border-[#141413]/14 bg-[#ECE6DC]">
                    <img
                      src={project.image}
                      alt={`${project.title} full showcase`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C85C3B]">
                      {project.subtitle}
                    </p>
                    <h3
                      id="project-modal-title"
                      className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-[#141413]"
                    >
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#57544E]">
                      {project.overview}
                    </p>

                    <dl className="mt-6 space-y-3 border-t border-[#141413]/12 pt-5 text-xs">
                      <div className="flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.12em] text-[#57544E]">
                          Client
                        </dt>
                        <dd className="font-medium text-[#141413] text-right">
                          {project.client}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.12em] text-[#57544E]">
                          Role
                        </dt>
                        <dd className="font-medium text-[#141413] text-right">
                          {project.role}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.12em] text-[#57544E]">
                          Deliverables
                        </dt>
                        <dd className="font-medium text-[#141413] text-right">
                          {project.deliverables.join(' · ')}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 border border-[#141413]/14 bg-[#ECE6DC]/60 p-4">
                      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C85C3B]">
                        Key Outcome
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#141413]">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#141413] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#F5F1EB] hover:bg-[#C85C3B] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85C3B]"
                    >
                      <span>Visit Live Showcase</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer Modal Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-[#141413]/12 pt-5">
                <button
                  type="button"
                  onClick={() => onNavigate('prev')}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors py-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Previous Project</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('next')}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors py-1"
                >
                  <span>Next Project</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
