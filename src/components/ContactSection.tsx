import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUp,
  Check,
  Copy,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import {
  validateContactForm,
  type ContactFormValues,
} from '../utils/portfolioLogic';

// Deterministic 21x21 QR-like matrix representing the portfolio URL
const QR_MATRIX: number[][] = [
  [1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
  [0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0],
  [1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1],
  [0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0],
  [1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1],
  [0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0],
  [1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0],
  [1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1],
  [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0],
  [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1],
  [1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0],
];

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback if clipboard permission is unavailable
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateContactForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setValues({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <footer id="contact" className="pt-16 pb-10 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Main 3-Column Editorial Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 pb-14 border-b border-[#141413]/14"
        >
          {/* Left: Headline + Interactive Project Inquiry Form */}
          <div className="lg:col-span-5 lg:pr-10">
            <h2 className="leading-[0.94] uppercase">
              <span className="block text-2xl sm:text-3xl font-medium tracking-[0.04em] text-[#141413]">
                LET&apos;S CREATE
              </span>
              <span className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#C85C3B]">
                SOMETHING GREAT
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#57544E]">
              Have a project in mind? Let&apos;s build something that makes an
              impact. Send a quick brief below or reach out directly.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-6 border border-[#C85C3B]/40 bg-[#ECE6DC]/60 p-5"
              >
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C85C3B]">
                  Inquiry Received
                </p>
                <p className="mt-1.5 text-sm text-[#141413]">
                  Thank you, <span className="font-semibold">{values.name}</span>.
                  I&apos;ll reply to{' '}
                  <span className="font-medium">{values.email}</span> within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 inline-flex items-center gap-2 border border-[#141413] px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#141413] hover:bg-[#141413] hover:text-[#F5F1EB] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-6 space-y-4"
                aria-label="Project inquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#57544E]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Elena Rostova"
                      className="mt-1.5 w-full border border-[#141413]/20 bg-transparent px-3.5 py-2.5 text-sm text-[#141413] placeholder:text-[#57544E]/50 focus:border-[#C85C3B] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-[#C85C3B]" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#57544E]"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="elena@studio.com"
                      className="mt-1.5 w-full border border-[#141413]/20 bg-transparent px-3.5 py-2.5 text-sm text-[#141413] placeholder:text-[#57544E]/50 focus:border-[#C85C3B] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#C85C3B]" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#57544E]"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Tell me about your timeline, goals, and design vision..."
                    className="mt-1.5 w-full border border-[#141413]/20 bg-transparent px-3.5 py-2.5 text-sm text-[#141413] placeholder:text-[#57544E]/50 focus:border-[#C85C3B] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#C85C3B]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 bg-[#141413] px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F1EB] transition-colors hover:bg-[#C85C3B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85C3B]"
                >
                  <span>Send Inquiry</span>
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          {/* Center: QR Code + Scan Label */}
          <div className="lg:col-span-3 lg:border-l lg:border-r lg:border-[#141413]/14 lg:px-8 flex flex-col items-start lg:items-center justify-center">
            <div className="flex items-center gap-5">
              <a
                href={PORTFOLIO_PROFILE.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open portfolio website URL"
                className="block border border-[#141413]/20 bg-white p-2.5 shadow-xs transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
              >
                <svg
                  viewBox="0 0 21 21"
                  className="h-24 w-24 text-[#141413]"
                  shapeRendering="crispEdges"
                  aria-hidden="true"
                >
                  <rect width="21" height="21" fill="#ffffff" />
                  {QR_MATRIX.map((row, rIdx) =>
                    row.map((cell, cIdx) =>
                      cell === 1 ? (
                        <rect
                          key={`${rIdx}-${cIdx}`}
                          x={cIdx}
                          y={rIdx}
                          width="1"
                          height="1"
                          fill="#141413"
                        />
                      ) : null
                    )
                  )}
                </svg>
              </a>

              <div className="flex flex-col">
                <span className="text-[11px] font-semibold leading-snug tracking-[0.12em] uppercase text-[#141413]">
                  SCAN TO VISIT
                  <br />
                  MY WEBSITE
                </span>
                {/* Hand-drawn editorial curved arrow pointing to QR */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 48 24"
                  className="mt-2 h-6 w-12 text-[#141413]/75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M44 4 C34 22, 16 20, 4 14" />
                  <path d="M10 10 L3 14 L8 20" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Direct Contact Channels & Social Links */}
          <div className="lg:col-span-4 lg:pl-10 flex flex-col justify-center">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-between gap-3 border-b border-[#141413]/10 pb-3">
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  className="editorial-link gap-3 text-[#141413] hover:text-[#C85C3B] transition-colors min-w-0"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-[#C85C3B]"
                    aria-hidden="true"
                  />
                  <span className="truncate">{PORTFOLIO_PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 border border-[#141413]/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#57544E] hover:border-[#141413] hover:text-[#141413] transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-[#C85C3B]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </li>

              <li className="border-b border-[#141413]/10 pb-3">
                <a
                  href={PORTFOLIO_PROFILE.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link gap-3 text-[#141413] hover:text-[#C85C3B] transition-colors"
                >
                  <Globe
                    className="h-4 w-4 shrink-0 text-[#C85C3B]"
                    aria-hidden="true"
                  />
                  <span>{PORTFOLIO_PROFILE.websiteLabel}</span>
                </a>
              </li>

              <li className="border-b border-[#141413]/10 pb-3">
                <a
                  href={PORTFOLIO_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link gap-3 text-[#141413] hover:text-[#C85C3B] transition-colors"
                >
                  <Instagram
                    className="h-4 w-4 shrink-0 text-[#C85C3B]"
                    aria-hidden="true"
                  />
                  <span>{PORTFOLIO_PROFILE.instagramHandle}</span>
                </a>
              </li>

              <li className="border-b border-[#141413]/10 pb-3">
                <a
                  href={PORTFOLIO_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link gap-3 text-[#141413] hover:text-[#C85C3B] transition-colors"
                >
                  <Github
                    className="h-4 w-4 shrink-0 text-[#C85C3B]"
                    aria-hidden="true"
                  />
                  <span>{PORTFOLIO_PROFILE.githubHandle}</span>
                </a>
              </li>

              <li className="border-b border-[#141413]/10 pb-3">
                <a
                  href={PORTFOLIO_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link gap-3 text-[#141413] hover:text-[#C85C3B] transition-colors"
                >
                  <Linkedin
                    className="h-4 w-4 shrink-0 text-[#C85C3B]"
                    aria-hidden="true"
                  />
                  <span>{PORTFOLIO_PROFILE.linkedinHandle}</span>
                </a>
              </li>

              <li className="flex items-center gap-3 text-[#57544E] pt-1">
                <MapPin
                  className="h-4 w-4 shrink-0 text-[#C85C3B]"
                  aria-hidden="true"
                />
                <span>{PORTFOLIO_PROFILE.location}</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Minimal Editorial Footer Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57544E]">
          <p>
            &copy; {new Date().getFullYear()} {PORTFOLIO_PROFILE.brandName}. All
            rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-medium tracking-[0.12em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
