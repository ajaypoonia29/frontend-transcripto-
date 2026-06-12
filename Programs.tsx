import { Link } from 'react-router';
import { ArrowRight, TrendingDown, Dumbbell, Heart, Apple, Clock, Users, CheckCircle } from 'lucide-react';

const programs = [
  {
    icon: TrendingDown,
    title: 'Weight Loss Program',
    subtitle: 'Lose fat sustainably',
    desc: 'Our most popular program. Science-backed nutrition and training to help you lose fat without sacrificing muscle or energy. Designed for Indian lifestyles.',
    duration: '3–6 months',
    sessions: 'Daily check-ins',
    href: '/programs/weight-loss',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop&auto=format',
    features: ['Custom Indian diet plan', 'Home/gym workouts', 'Weekly coach calls', 'Progress tracking'],
    badge: 'Most Popular',
    badgeColor: '#E8192C',
  },
  {
    icon: Dumbbell,
    title: 'Muscle Gain Program',
    subtitle: 'Build lean mass',
    desc: 'Progressive resistance training combined with high-protein Indian meal plans. Build the physique you want without steroids or supplements you don\'t need.',
    duration: '4–6 months',
    sessions: 'Tri-weekly updates',
    href: '/programs/muscle-gain',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&auto=format',
    features: ['Progressive overload plans', 'High-protein meal planning', 'Supplement guidance', 'Posture correction'],
    badge: 'New',
    badgeColor: '#3B82F6',
  },
  {
    icon: Heart,
    title: 'PCOS Program',
    subtitle: 'Hormone balance & fat loss',
    desc: 'A specialized program for women with PCOS. Balance hormones naturally, reduce insulin resistance, manage weight, and improve overall well-being.',
    duration: '3–4 months',
    sessions: 'Bi-weekly calls',
    href: '/programs/pcos',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop&auto=format',
    features: ['Hormone-balancing nutrition', 'Low-impact workouts', 'Cycle tracking support', 'Stress management'],
    badge: 'Specialist',
    badgeColor: '#8B5CF6',
  },
  {
    icon: Apple,
    title: 'Custom Diet Plans',
    subtitle: 'Nutrition-only coaching',
    desc: 'Just need a diet overhaul without training? Our registered dietitians craft personalized meal plans rooted in Indian cuisine that you\'ll actually enjoy.',
    duration: 'Ongoing',
    sessions: 'Weekly updates',
    href: '/diet-plans',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&auto=format',
    features: ['1,200–2,500 kcal plans', '7-day rotating menus', 'Restaurant guide', 'Grocery lists'],
    badge: 'Flexible',
    badgeColor: '#22C55E',
  },
];

export function Programs() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            ALL PROGRAMS
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            Programs Designed<br /><span style={{ color: '#E8192C' }}>For Real Results</span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Choose the program that matches your goal. Every program comes with a dedicated coach, personalized plans, and full accountability.
          </p>
        </div>
      </section>

      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden`}
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={p.img} alt={p.title} className="w-full h-72 lg:h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.4), transparent)' }} />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs text-white" style={{ background: p.badgeColor, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                  {p.badge}
                </div>
              </div>
              <div className={`p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(232,25,44,0.15)' }}>
                    <p.icon size={20} style={{ color: '#E8192C' }} />
                  </div>
                  <span style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.subtitle}</span>
                </div>
                <h2 className="text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', textTransform: 'uppercase' }}>{p.title}</h2>
                <p className="mb-6" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.7, fontSize: '0.9rem' }}>{p.desc}</p>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={14} style={{ color: '#E8192C' }} />
                    <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>{p.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} style={{ color: '#E8192C' }} />
                    <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>{p.sessions}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#22C55E' }} />
                      <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={p.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm text-white transition-all hover:opacity-90"
                  style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
