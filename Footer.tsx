import { Link } from 'react-router';
import { Zap, Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Programs: [
    { label: 'Weight Loss', href: '/programs/weight-loss' },
    { label: 'Muscle Gain', href: '/programs/muscle-gain' },
    { label: 'PCOS Program', href: '/programs/pcos' },
    { label: 'Diet Plans', href: '/diet-plans' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Coaches', href: '/coaches' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Blog', href: '/blog' },
  ],
  Support: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
  ],
};

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded" style={{ background: '#E8192C' }}>
                <Zap size={18} fill="white" color="white" />
              </div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                Transcripto
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", maxWidth: '300px' }}>
              India's premium online fitness & nutrition coaching platform. Real results, real coaches, real transformations.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { Icon: Phone, text: '+91 98765 43210' },
                { Icon: Mail, text: 'hello@transcripto.in' },
                { Icon: MapPin, text: 'Mumbai, India' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>
                  <Icon size={14} style={{ color: '#E8192C' }} />
                  {text}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded transition-all duration-200 hover:scale-110"
                  style={{ background: '#1A1A1A', color: '#FFFFFF' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#E8192C')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1A1A1A')}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.95rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: '#555555', fontFamily: "'Inter', sans-serif" }}>
            © 2024 Transcripto. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#555555', fontFamily: "'Inter', sans-serif" }}>
            Transforming lives across India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
