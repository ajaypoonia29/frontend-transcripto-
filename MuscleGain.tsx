import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Dumbbell, Zap, Target, Activity } from 'lucide-react';

const phases = [
  { phase: 'Phase 1', title: 'Foundation', weeks: 'Weeks 1–4', desc: 'Build proper form, establish baseline strength, and adapt the body to progressive loading.' },
  { phase: 'Phase 2', title: 'Hypertrophy', weeks: 'Weeks 5–12', desc: 'Targeted volume training to maximize muscle fiber recruitment and protein synthesis.' },
  { phase: 'Phase 3', title: 'Strength', weeks: 'Weeks 13–18', desc: 'Heavier compound movements to convert hypertrophy gains into functional strength.' },
  { phase: 'Phase 4', title: 'Peak', weeks: 'Weeks 19–24', desc: 'Deload, refeed, and reveal. Fine-tune body composition and achieve peak condition.' },
];

export function MuscleGain() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="relative py-24 overflow-hidden" style={{ background: '#080808' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,8,1), rgba(8,8,8,0.6))' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell size={16} style={{ color: '#E8192C' }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Muscle Gain Program</span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '1.5rem' }}>
              Build The Body<br />You've Always<br /><span style={{ color: '#E8192C' }}>Wanted.</span>
            </h1>
            <p className="mb-8" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.8, fontSize: '1.05rem' }}>
              Expert-designed progressive training with high-protein Indian meal plans. No steroids, no shortcuts — just science-backed muscle building that lasts.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              Start Building Muscle <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Program phases */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              The 24-Week <span style={{ color: '#E8192C' }}>Program</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <div key={p.phase} className="p-6 rounded-2xl relative overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: '#E8192C' }} />
                <div className="text-xs mb-2" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.phase}</div>
                <h3 className="text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>{p.title}</h3>
                <div className="text-xs mb-3" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{p.weeks}</div>
                <p style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem' }}>
                Everything You <span style={{ color: '#E8192C' }}>Need</span>
              </h2>
              <div className="flex flex-col gap-3">
                {['Progressive overload workout plans', 'High-protein Indian meal plans (150g+/day)', 'Supplement stack guidance (no fads)', 'Posture & form video analysis', 'Weekly strength progress tracking', 'Body composition scans review', '1:1 coach video calls', 'Rest day & recovery protocols'].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#22C55E', flexShrink: 0 }} />
                    <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white mt-8" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=700&fit=crop&auto=format" alt="Muscle training" className="w-full rounded-2xl object-cover" style={{ height: '450px' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
