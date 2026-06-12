import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Clock, Users, TrendingDown, Scale, Flame, Apple } from 'lucide-react';

const steps = [
  { step: '01', title: 'Free Consultation', desc: 'Book a call with our coach. We understand your health history, goals, lifestyle, and food preferences.' },
  { step: '02', title: 'Personalized Plan', desc: 'Your coach creates a custom calorie-deficit plan with Indian foods you love and a workout routine for your level.' },
  { step: '03', title: 'Daily Accountability', desc: 'Check-in every day via WhatsApp. Share meals, workouts, and measurements for real-time feedback.' },
  { step: '04', title: 'Weekly Adjustments', desc: 'Based on your progress, your coach fine-tunes the plan weekly so you never hit a plateau.' },
];

const results = [
  { metric: '4–6 kg', label: 'Average loss/month', icon: Scale },
  { metric: '30 min', label: 'Daily workout time', icon: Clock },
  { metric: '100%', label: 'Indian diet compatible', icon: Apple },
  { metric: '98%', label: 'Client success rate', icon: TrendingDown },
];

export function WeightLoss() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#080808' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,8,1), rgba(8,8,8,0.7))' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown size={16} style={{ color: '#E8192C' }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Weight Loss Program</span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '1.5rem' }}>
              Lose Fat.<br />Keep Muscle.<br /><span style={{ color: '#E8192C' }}>Love Your Body.</span>
            </h1>
            <p className="mb-8" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.8, fontSize: '1.05rem' }}>
              India's most trusted online weight loss coaching. Sustainable fat loss with real Indian food, no starvation, and a dedicated expert coach by your side.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                Start Losing Weight <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results metrics */}
      <section className="py-12" style={{ background: '#E8192C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map(({ metric, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon size={24} className="mx-auto mb-2" style={{ color: 'rgba(255,255,255,0.8)' }} />
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.2rem', color: '#FFFFFF', lineHeight: 1 }}>{metric}</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              How It <span style={{ color: '#E8192C' }}>Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '3rem', color: 'rgba(232,25,44,0.2)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.step}</div>
                <h3 className="text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase' }}>{s.title}</h3>
                <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              What's <span style={{ color: '#E8192C' }}>Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Personalized calorie & macro targets',
              '7-day rotating Indian meal plans',
              'Home & gym workout programs',
              'Daily WhatsApp accountability',
              'Weekly 1:1 video coach call',
              'Progress photo analysis',
              'Blood work interpretation',
              'Supplement recommendations',
              'Restaurant & travel guide',
              'Recipe library (200+ Indian recipes)',
              'Grocery shopping list',
              '24/7 coach chat access',
            ].map(f => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <CheckCircle size={18} style={{ color: '#22C55E', flexShrink: 0 }} />
                <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>{f}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded text-white text-base" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
