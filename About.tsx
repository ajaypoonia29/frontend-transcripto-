import { Link } from 'react-router';
import { ArrowRight, Target, Heart, Users, Award } from 'lucide-react';

const values = [
  { icon: Target, title: 'Results-Driven', desc: 'Every plan is built around measurable, trackable outcomes. We celebrate every kg lost and every PR broken.' },
  { icon: Heart, title: 'Client-First', desc: 'Your health, preferences, and lifestyle are at the center of everything we design. No one-size-fits-all here.' },
  { icon: Users, title: 'Expert-Led', desc: 'Our coaches hold globally recognized certifications and have years of real-world coaching experience.' },
  { icon: Award, title: 'Integrity', desc: 'Honest advice, realistic timelines, and no miracle claims. We believe in sustainable transformation.' },
];

const milestones = [
  { year: '2019', event: 'Founded in Mumbai with 3 coaches' },
  { year: '2020', event: 'Crossed 1,000 transformations during lockdown' },
  { year: '2021', event: 'Launched PCOS-specific program & diet plans' },
  { year: '2022', event: '10,000+ clients — expanded to 50+ coaches' },
  { year: '2023', event: 'Launched app beta & nutrition science division' },
  { year: '2024', event: '15,000+ lives transformed & counting' },
];

export function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                OUR STORY
              </span>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1.5rem' }}>
                We're On A Mission To<br /><span style={{ color: '#E8192C' }}>Transform India's Health</span>
              </h1>
              <p className="mb-6" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.8, fontSize: '1.05rem' }}>
                Transcripto was born out of frustration. Our founder, Vikram Nair, watched his family and friends struggle with fad diets, expensive gym memberships, and zero results. He knew there was a better way.
              </p>
              <p className="mb-8" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.8, fontSize: '1.05rem' }}>
                In 2019, Transcripto launched with a simple promise: personalized fitness coaching that actually works for the Indian lifestyle — featuring real food, flexible schedules, and dedicated human coaches. Five years later, we've transformed 15,000+ lives and counting.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded text-white transition-all hover:opacity-90"
                style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=500&fit=crop&auto=format"
                alt="Transcripto team"
                className="w-full rounded-2xl object-cover"
                style={{ height: '450px' }}
              />
              <div className="absolute -bottom-4 -right-4 p-5 rounded-2xl" style={{ background: '#E8192C' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.5rem', color: '#FFFFFF', lineHeight: 1 }}>5+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              Our Core <span style={{ color: '#E8192C' }}>Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(232,25,44,0.15)' }}>
                  <Icon size={22} style={{ color: '#E8192C' }} />
                </div>
                <h3 className="text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase' }}>{title}</h3>
                <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              Our <span style={{ color: '#E8192C' }}>Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.08)', transform: 'translateX(-50%)' }} />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-row`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} pl-14 sm:pl-0`}>
                    <div className="p-4 rounded-xl inline-block" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.2rem', color: '#E8192C' }}>{m.year}</div>
                      <div style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem' }}>{m.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 flex-shrink-0" style={{ background: '#E8192C', boxShadow: '0 0 10px rgba(232,25,44,0.5)' }} />
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: '#E8192C' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, fontSize: 'clamp(2rem,5vw,3.5rem)', marginBottom: '1rem' }}>
            Join Our Growing Family
          </h2>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>Be one of our next 15,000 success stories.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-base" style={{ background: '#FFFFFF', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            Get Started Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
