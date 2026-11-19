import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F5F1EB]/92 backdrop-blur-md border-b border-[#141413]/12'
          : 'bg-[#F5F1EB]/75 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileOpen(false);
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 text-[#C85C3B]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
          </svg>
          <span>{PORTFOLIO_PROFILE.brandName}</span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-xs font-medium tracking-[0.12em] uppercase text-[#57544E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="editorial-link py-1 text-[#57544E] hover:text-[#141413] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + Mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="group hidden sm:inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors whitespace-nowrap shrink-0 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85C3B]"
          >
            <span>{PORTFOLIO_PROFILE.availabilityLabel}</span>
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 text-[#C85C3B] transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#141413]/15 text-[#141413] hover:border-[#141413] transition-colors md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85C3B]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile hamburger drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#141413]/12 bg-[#F5F1EB] md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col px-5 py-5 gap-1"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between border-b border-[#141413]/10 py-3.5 text-sm font-medium tracking-[0.12em] uppercase text-[#141413] hover:text-[#C85C3B] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-[#C85C3B]" aria-hidden="true" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-4 inline-flex items-center justify-between bg-[#141413] px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F1EB]"
              >
                <span>{PORTFOLIO_PROFILE.availabilityLabel}</span>
                <ArrowRight className="h-4 w-4 text-[#C85C3B]" aria-hidden="true" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
