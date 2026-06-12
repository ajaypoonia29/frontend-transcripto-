import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Heart, Star } from 'lucide-react';

const symptoms = [
  'Irregular periods', 'Unexplained weight gain', 'Acne & hair loss', 'Insulin resistance',
  'Mood swings & anxiety', 'Difficulty losing weight', 'Low energy levels', 'Facial hair growth',
];

const testimonials = [
  { name: 'Riya Kapoor', city: 'Delhi', text: 'My periods are regular for the first time in 3 years. Lost 18 kg and my acne cleared up. Transcripto\'s PCOS program changed everything.', loss: '18 kg', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&auto=format' },
  { name: 'Shruti Jain', city: 'Pune', text: 'No more bloating, no more mood swings. The hormone-balancing diet actually works! I feel like a different person after 4 months.', loss: '14 kg', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&auto=format' },
];

export function PCOS() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="relative py-24" style={{ background: '#080808' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,8,1), rgba(8,8,8,0.6))' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Heart size={16} style={{ color: '#E8192C' }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>PCOS Program</span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '1.5rem' }}>
              Beat PCOS.<br />Balance Hormones.<br /><span style={{ color: '#E8192C' }}>Reclaim Your Life.</span>
            </h1>
            <p className="mb-8" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.8, fontSize: '1.05rem' }}>
              India's most trusted PCOS coaching program. Our specialist coaches help you naturally balance hormones, manage weight, and regularize your cycle — without medication dependency.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              Book Free PCOS Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              Are You Experiencing<br /><span style={{ color: '#E8192C' }}>These Symptoms?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {symptoms.map(s => (
              <div key={s} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <CheckCircle size={14} style={{ color: '#E8192C', flexShrink: 0 }} />
                <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{s}</span>
              </div>
            ))}
          </div>
          <p className="text-center max-w-xl mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            If you checked 3 or more, our PCOS specialist coaches can help you address the root cause — not just mask symptoms.
          </p>
        </div>
      </section>

      {/* Program approach */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=600&fit=crop&auto=format" alt="PCOS specialist coach" className="w-full rounded-2xl object-cover" style={{ height: '450px' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem' }}>
                Our Specialist <span style={{ color: '#E8192C' }}>Approach</span>
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { title: 'Hormone-Balancing Nutrition', desc: 'Low-GI, anti-inflammatory diet plans that reduce insulin resistance and cortisol — the two biggest PCOS drivers.' },
                  { title: 'Low-Impact Training', desc: 'Yoga, walking, and light resistance training tailored for PCOS — intense cardio can worsen symptoms.' },
                  { title: 'Cycle Syncing', desc: 'We adjust your diet and workout plan to align with your menstrual cycle phases for optimal results.' },
                  { title: 'Stress & Sleep Protocols', desc: 'Cortisol management techniques and sleep optimization, because stress management is PCOS management.' },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <div className="text-white mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.95rem' }}>{title}</div>
                    <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white mt-8" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              PCOS <span style={{ color: '#E8192C' }}>Success Stories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="p-6 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1 mb-4">{Array.from({length:5}).map((_,i)=><Star key={i} size={14} fill="#F59E0B" color="#F59E0B"/>)}</div>
                <p className="mb-4" style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', lineHeight: 1.7 }}>"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{t.name}</div>
                      <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{t.city}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{t.loss} lost</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
