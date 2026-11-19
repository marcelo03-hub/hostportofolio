import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import {
  EXTRA_TESTIMONIALS,
  TESTIMONIALS,
  type TestimonialItem,
} from '../data/portfolioData';

export function TestimonialsSection() {
  const [showMore, setShowMore] = useState(false);
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});

  const items: TestimonialItem[] = showMore
    ? [...TESTIMONIALS, ...EXTRA_TESTIMONIALS]
    : TESTIMONIALS;

  return (
    <section
      id="testimonials"
      className="border-b border-[#141413]/14 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Editorial 3-part section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 pb-10"
        >
          <div className="lg:col-span-4">
            <h2 className="leading-[0.94] uppercase">
              <span className="block text-2xl sm:text-3xl font-medium tracking-[0.04em] text-[#141413]">
                WHAT CLIENTS
              </span>
              <span className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#C85C3B]">
                SAY
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-[#57544E]">
              Honest feedback from amazing clients I&apos;ve had the pleasure to
              work with across branding, design, and engineering.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              aria-expanded={showMore}
              className="group inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
            >
              <span>{showMore ? 'SHOW LESS' : 'MORE REVIEWS'}</span>
              <ArrowRight
                aria-hidden="true"
                className={`h-3.5 w-3.5 text-[#C85C3B] transition-transform duration-200 ${
                  showMore ? '-rotate-90' : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* 3-Column Bordered Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((testimonial, index) => {
            const avatarFailed = failedAvatars[testimonial.id];
            const initials = testimonial.name
              .split(' ')
              .map((part) => part[0])
              .join('');

            return (
              <motion.figure
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between border border-[#141413]/15 bg-[#F5F1EB] p-6 sm:p-7"
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="block font-serif text-4xl leading-none text-[#C85C3B] select-none"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 text-sm leading-[1.65] text-[#141413]/90">
                    {testimonial.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-[#141413]/10 pt-4">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#141413]/15 bg-[#ECE6DC]">
                    {!avatarFailed ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedAvatars((prev) => ({
                            ...prev,
                            [testimonial.id]: true,
                          }))
                        }
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#141413]">
                        {initials}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#141413] truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#57544E] truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
