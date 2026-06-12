import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'All Programs', href: '/programs' },
      { label: 'Weight Loss', href: '/programs/weight-loss' },
      { label: 'Muscle Gain', href: '/programs/muscle-gain' },
      { label: 'PCOS Program', href: '/programs/pcos' },
    ],
  },
  { label: 'Diet Plans', href: '/diet-plans' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 flex items-center justify-center rounded"
            style={{ background: '#E8192C' }}
          >
            <Zap size={18} fill="white" color="white" />
          </div>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: '1.5rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            Transcripto
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                {/* Dropdown */}
                <div
                  className="absolute top-full left-0 pt-2 transition-all duration-200"
                  style={{ opacity: programsOpen ? 1 : 0, pointerEvents: programsOpen ? 'auto' : 'none' }}
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <div
                    className="rounded-lg py-2 min-w-48"
                    style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="px-3 py-2 text-sm transition-colors block"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: location.pathname === link.href ? '#E8192C' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Start Today
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden"
          style={{ background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div
                    className="px-3 py-2.5 text-sm text-white/50 uppercase tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem' }}
                  >
                    Programs
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-6 py-2.5 text-sm text-white/70 hover:text-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-2.5 text-sm transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: location.pathname === link.href ? '#E8192C' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="mt-3 px-5 py-3 rounded text-sm text-white text-center transition-all"
              style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Start Today
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
