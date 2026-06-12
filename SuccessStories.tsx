import { Link } from 'react-router';
import { ArrowRight, Star, Filter } from 'lucide-react';
import { useState } from 'react';

const stories = [
  { name: 'Priya Sharma', location: 'Mumbai', lost: '28 kg', duration: '5 months', program: 'Weight Loss', rating: 5, text: 'I had tried everything — keto, intermittent fasting, gym memberships. Nothing worked until Transcripto. My coach understood my thyroid issues and designed a plan specifically for me. 28 kg gone!', before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=350&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?w=300&h=350&fit=crop&auto=format' },
  { name: 'Rahul Mehta', location: 'Delhi', lost: '18 kg', duration: '4 months', program: 'Fat Loss', rating: 5, text: 'As a banker, I had zero time and terrible eating habits. Transcripto gave me a practical plan I could actually follow with my schedule. The WhatsApp accountability was a game-changer.', before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=350&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=350&fit=crop&auto=format' },
  { name: 'Anjali Singh', location: 'Bangalore', lost: '22 kg', duration: '6 months', program: 'PCOS', rating: 5, text: 'PCOS made me feel like my body was working against me. After 6 months with Transcripto, my periods are regular, I lost 22 kg, and my confidence is back. Forever grateful.', before: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=350&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=350&fit=crop&auto=format' },
  { name: 'Kartik Sharma', location: 'Chennai', lost: '12 kg', duration: '3 months', program: 'Muscle Gain', rating: 5, text: 'I wanted to gain muscle, not lose weight. My coach built a calorie surplus plan with enough protein from Indian food. Gained 6 kg muscle while shedding 12 kg fat. Recomp done!', before: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=350&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=300&h=350&fit=crop&auto=format' },
  { name: 'Meera Iyer', location: 'Hyderabad', lost: '19 kg', duration: '4 months', program: 'PCOS', rating: 5, text: 'My gynecologist couldn\'t believe my bloodwork improvements at the 4-month mark. Testosterone levels normalized, AMH improved, and I lost 19 kg. Best investment in my health.', before: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=350&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=350&fit=crop&auto=format' },
  { name: 'Suresh Nair', location: 'Pune', lost: '31 kg', duration: '8 months', program: 'Weight Loss', rating: 5, text: 'Started at 107 kg, now at 76 kg. Blood pressure is normal, sugar is controlled, and I ran my first 5K last month. Transcripto gave me my life back at 45.', before: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&h=350&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=350&fit=crop&auto=format' },
];

const filters = ['All', 'Weight Loss', 'Muscle Gain', 'PCOS', 'Fat Loss'];

export function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? stories : stories.filter(s => s.program === activeFilter);

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>REAL RESULTS</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            15,000+ Lives<br /><span style={{ color: '#E8192C' }}>Transformed</span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Real people, real journeys, real results. No filters, no photoshop — just the power of personalized coaching.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 rounded-full text-sm transition-all"
                style={{
                  background: activeFilter === f ? '#E8192C' : '#111111',
                  color: activeFilter === f ? '#FFFFFF' : '#888888',
                  border: activeFilter === f ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories grid */}
      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(s => (
              <div key={s.name} className="rounded-2xl overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="grid grid-cols-2 h-56">
                  <div className="relative"><img src={s.before} alt="before" className="w-full h-full object-cover object-top" /><div className="absolute bottom-0 left-0 right-0 px-3 py-1.5" style={{ background: 'rgba(0,0,0,0.7)' }}><span className="text-xs text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>BEFORE</span></div></div>
                  <div className="relative"><img src={s.after} alt="after" className="w-full h-full object-cover object-top" /><div className="absolute bottom-0 left-0 right-0 px-3 py-1.5" style={{ background: 'rgba(22,163,74,0.8)' }}><span className="text-xs text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>AFTER</span></div></div>
                </div>
                <div className="p-5">
                  <div className="flex gap-1 mb-3">{Array.from({length:s.rating}).map((_,i)=><Star key={i} size={12} fill="#F59E0B" color="#F59E0B"/>)}</div>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>"{s.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{s.name}</div>
                      <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{s.location} · {s.program}</div>
                    </div>
                    <div className="text-right">
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.3rem', color: '#22C55E' }}>-{s.lost}</div>
                      <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{s.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: '#E8192C' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, fontSize: 'clamp(2rem,5vw,3.5rem)', marginBottom: '1rem' }}>
            Write Your Own Success Story
          </h2>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>Join thousands of Indians who transformed their health with Transcripto.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-base" style={{ background: '#FFFFFF', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            Start Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
