import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight, Star, CheckCircle, ChevronDown, ChevronUp,
  Flame, Dumbbell, Apple, Heart, Users, Trophy, Clock,
  Smartphone, Play, TrendingDown, Activity, Target
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '15,000+', label: 'Lives Transformed' },
  { value: '98%', label: 'Success Rate' },
  { value: '50+', label: 'Expert Coaches' },
  { value: '4.9★', label: 'Average Rating' },
];

const transformations = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    lost: '28 kg',
    duration: '5 months',
    program: 'Weight Loss',
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&auto=format',
    after: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?w=400&h=500&fit=crop&auto=format',
  },
  {
    name: 'Rahul Mehta',
    location: 'Delhi',
    lost: '18 kg',
    duration: '4 months',
    program: 'Fat Loss + Muscle',
    before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&auto=format',
    after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop&auto=format',
  },
  {
    name: 'Anjali Singh',
    location: 'Bangalore',
    lost: '22 kg',
    duration: '6 months',
    program: 'PCOS + Weight Loss',
    before: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&auto=format',
    after: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&auto=format',
  },
];

const programs = [
  {
    icon: TrendingDown,
    label: 'Weight Loss',
    desc: 'Science-backed fat loss with personalized nutrition & training plans.',
    href: '/programs/weight-loss',
    color: '#E8192C',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Dumbbell,
    label: 'Muscle Gain',
    desc: 'Build lean muscle with progressive overload and optimized protein plans.',
    href: '/programs/muscle-gain',
    color: '#E8192C',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Heart,
    label: 'PCOS Program',
    desc: 'Hormone-balancing nutrition and workouts tailored for PCOS management.',
    href: '/programs/pcos',
    color: '#E8192C',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Apple,
    label: 'Diet Plans',
    desc: 'Custom meal plans by registered dietitians — Indian cuisine focused.',
    href: '/diet-plans',
    color: '#E8192C',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&auto=format',
  },
];

const coaches = [
  {
    name: 'Vikram Nair',
    title: 'Head Coach & Nutritionist',
    exp: '12 years',
    certs: 'ACE, Precision Nutrition',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&auto=format',
  },
  {
    name: 'Deepika Rao',
    title: 'Women\'s Fitness Specialist',
    exp: '9 years',
    certs: 'NASM, PCOS Certified',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&auto=format',
  },
  {
    name: 'Arjun Kapoor',
    title: 'Strength & Conditioning Coach',
    exp: '10 years',
    certs: 'CSCS, NSA',
    img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop&auto=format',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    desc: 'Perfect to get started',
    features: ['Personalized Diet Plan', 'Weekly Check-ins', 'WhatsApp Support', 'Video Workouts'],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Transform',
    price: '₹4,999',
    period: '/month',
    desc: 'Most popular program',
    features: ['Everything in Starter', '1:1 Coach Calls (2/mo)', 'Blood Work Analysis', 'Supplement Guide', 'Priority Support'],
    popular: true,
    cta: 'Start Transforming',
  },
  {
    name: 'Elite',
    price: '₹8,999',
    period: '/month',
    desc: 'Maximum accountability',
    features: ['Everything in Transform', 'Daily Check-ins', 'Unlimited Coach Calls', 'Grocery Shopping List', 'Recipe Library', 'Progress Photoshoot'],
    popular: false,
    cta: 'Go Elite',
  },
];

const testimonials = [
  {
    name: 'Sneha Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'I lost 26 kg in 5 months with Transcripto. My coach was always available and the diet plan was completely Indian food — no boiled food nonsense! Best decision of my life.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&auto=format',
    loss: '26 kg lost',
  },
  {
    name: 'Karthik Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'Joined for weight loss and ended up gaining muscle too. The coaches really understand Indian lifestyle and food habits. No generic plans here — everything is tailored.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format',
    loss: '15 kg lost',
  },
  {
    name: 'Meera Krishnan',
    location: 'Chennai',
    rating: 5,
    text: 'My PCOS was completely managed in 4 months. My periods are regular, energy levels are up, and I lost 19 kg. Transcripto changed my relationship with food forever.',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&auto=format',
    loss: '19 kg lost',
  },
];

const faqs = [
  {
    q: 'How is Transcripto different from gym memberships?',
    a: 'Transcripto is 100% online coaching with a dedicated expert coach assigned to you. Unlike gyms, you get personalized diet plans, workout routines, and daily accountability — all from home.',
  },
  {
    q: 'Do I need gym equipment to follow the programs?',
    a: 'No! Most of our programs can be done at home with minimal or no equipment. We design workouts based on your available resources.',
  },
  {
    q: 'Are the diet plans Indian food friendly?',
    a: 'Absolutely. All our diet plans are 100% Indian cuisine based. From rotis to dal, we make nutrition work with real Indian food — no boiled chicken or bland salads.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Most clients see noticeable changes within 3–4 weeks. Significant transformations typically happen between 3–6 months depending on your program and commitment.',
  },
  {
    q: 'What if I travel or have a busy schedule?',
    a: 'Our programs are designed for real life. Your coach adjusts your plan around travel, festivals, and hectic weeks — there\'s no rigid rulebook.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes! We offer a 7-day money-back guarantee if you\'re not satisfied. We\'re that confident in our results.',
  },
];

// ─── BMI Calculator ───────────────────────────────────────────────────────────

function BMISection() {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('75');
  const bmi = weight && height ? (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(1) : null;
  const bmiNum = bmi ? parseFloat(bmi) : 0;
  const bmiLabel = bmiNum < 18.5 ? 'Underweight' : bmiNum < 25 ? 'Normal' : bmiNum < 30 ? 'Overweight' : 'Obese';
  const bmiColor = bmiNum < 18.5 ? '#3B82F6' : bmiNum < 25 ? '#22C55E' : bmiNum < 30 ? '#F59E0B' : '#E8192C';
  const bmiPct = Math.min(Math.max(((bmiNum - 10) / 30) * 100, 0), 100);

  return (
    <section style={{ background: '#0F0F0F' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              FREE TOOL
            </span>
            <h2 className="text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', textTransform: 'uppercase', lineHeight: 1 }}>
              Check Your<br />
              <span style={{ color: '#E8192C' }}>BMI Score</span>
            </h2>
            <p className="mb-6" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              Calculate your Body Mass Index in seconds. Our coaches use your BMI along with 10+ other health markers to design your personalized plan.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-xs mb-2" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  className="w-full px-4 py-3 rounded text-white outline-none focus:ring-1"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Inter', sans-serif", color: '#FFFFFF' }}
                  placeholder="170"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs mb-2" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded text-white outline-none focus:ring-1"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Inter', sans-serif", color: '#FFFFFF' }}
                  placeholder="75"
                />
              </div>
            </div>

            {bmi && (
              <div className="p-6 rounded-xl" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>Your BMI</div>
                    <div style={{ fontSize: '2.5rem', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: bmiColor }}>{bmi}</div>
                    <div style={{ color: bmiColor, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>{bmiLabel}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-4 py-2.5 rounded text-sm text-white"
                    style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    Get Free Consultation
                  </Link>
                </div>
                <div className="relative h-3 rounded-full overflow-hidden" style={{ background: '#333' }}>
                  <div
                    className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
                    style={{ width: `${bmiPct}%`, background: `linear-gradient(to right, #3B82F6, #22C55E, #F59E0B, #E8192C)` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white"
                    style={{ left: `calc(${bmiPct}% - 8px)`, background: bmiColor }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs" style={{ color: '#666', fontFamily: "'Inter', sans-serif" }}>
                  <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1599058917765-a780eda67c73?w=600&h=700&fit=crop&auto=format"
              alt="Fitness transformation"
              className="w-full rounded-2xl object-cover"
              style={{ height: '500px' }}
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl" style={{ background: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#E8192C' }}>
                  <Target size={18} color="white" />
                </div>
                <div>
                  <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Start your transformation today</div>
                  <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>Free consultation with our top coaches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20" style={{ background: '#080808' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            FREQUENTLY ASKED
          </span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
            Got Questions?<br /><span style={{ color: '#E8192C' }}>We've Got Answers.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
              style={{ background: open === i ? '#1A1A1A' : '#111111', border: `1px solid ${open === i ? 'rgba(232,25,44,0.3)' : 'rgba(255,255,255,0.06)'}` }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-4 gap-4">
                <h4 className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</h4>
                <div className="flex-shrink-0" style={{ color: open === i ? '#E8192C' : '#666' }}>
                  {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              {open === i && (
                <div className="px-6 pb-5">
                  <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7, fontSize: '0.9rem' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=900&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.85) 50%, rgba(232,25,44,0.2) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ background: '#E8192C' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                India's #1 Online Fitness Coaching
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#FFFFFF',
                lineHeight: 0.92,
                marginBottom: '1.5rem',
              }}
            >
              Transform Your<br />
              Body In<br />
              <span style={{ color: '#E8192C', WebkitTextStroke: '0px', display: 'block' }}>90 Days.</span>
            </h1>
            <p
              className="mb-8 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              Personalized nutrition plans, expert coaches, and accountability that actually works. Join 15,000+ Indians who transformed their health with Transcripto.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-7 py-4 rounded text-white text-base transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
              <Link
                to="/success-stories"
                className="inline-flex items-center gap-2 px-7 py-4 rounded text-white text-base transition-all"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: "'Inter', sans-serif", fontWeight: 600, backdropFilter: 'blur(8px)' }}
              >
                <Play size={16} fill="currentColor" /> See Transformations
              </Link>
            </div>
            {/* Stats bar */}
            <div className="flex flex-wrap gap-8">
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.75rem', color: '#FFFFFF', letterSpacing: '-0.01em' }}>{s.value}</div>
                  <div style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))' }} />
          <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
      </section>

      {/* Transformations */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                REAL RESULTS
              </span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
                Client<br /><span style={{ color: '#E8192C' }}>Transformations</span>
              </h2>
            </div>
            <Link to="/success-stories" className="flex items-center gap-2 text-sm" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              View All Stories <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transformations.map((t) => (
              <div key={t.name} className="rounded-2xl overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img src={t.before} alt={`${t.name} before`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5" style={{ background: 'rgba(0,0,0,0.7)' }}>
                      <span className="text-xs text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>BEFORE</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={t.after} alt={`${t.name} after`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5" style={{ background: 'rgba(22,163,74,0.8)' }}>
                      <span className="text-xs text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{t.name}</div>
                      <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{t.location}</div>
                    </div>
                    <div className="text-right">
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#22C55E', letterSpacing: '-0.01em' }}>
                        -{t.lost}
                      </div>
                      <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>in {t.duration}</div>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded text-xs" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    {t.program}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              OUR PROGRAMS
            </span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              Find Your Perfect<br /><span style={{ color: '#E8192C' }}>Program</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((p) => (
              <Link key={p.label} to={p.href} className="group block rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={p.img} alt={p.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }} />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#E8192C' }}>
                    <p.icon size={20} color="white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase' }}>{p.label}</h3>
                  <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', lineHeight: 1.6 }}>{p.desc}</p>
                  <div className="flex items-center gap-1 mt-4" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem' }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Transcripto */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&h=800&fit=crop&auto=format"
                alt="Coach with client"
                className="w-full rounded-2xl object-cover"
                style={{ height: '550px' }}
              />
              <div
                className="absolute top-6 -right-4 sm:right-6 p-4 rounded-xl"
                style={{ background: '#E8192C' }}
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', color: '#FFFFFF', lineHeight: 1 }}>98%</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>Client Success Rate</div>
              </div>
              <div
                className="absolute bottom-6 -left-4 sm:left-6 p-4 rounded-xl"
                style={{ background: 'rgba(8,8,8,0.95)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#22C55E' }}>
                    <Trophy size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#FFFFFF', fontSize: '0.9rem' }}>15,000+</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", color: '#888888', fontSize: '0.75rem' }}>Lives Changed</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                WHY TRANSCRIPTO
              </span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem' }}>
                Science-Backed.<br />Coach-Led.<br /><span style={{ color: '#E8192C' }}>Results Guaranteed.</span>
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Users, title: 'Dedicated 1:1 Coach', desc: 'A real expert assigned to your journey — not an AI chatbot. Direct WhatsApp access.' },
                  { icon: Apple, title: '100% Indian Diet Plans', desc: 'No boiled chicken. Enjoy biryani, rotis, and real food while losing weight.' },
                  { icon: Activity, title: 'Data-Driven Approach', desc: 'Weekly body measurements, progress photos, and health metrics tracked precisely.' },
                  { icon: Clock, title: 'Flexible & Sustainable', desc: 'Programs designed around your lifestyle, work schedule, and food preferences.' },
                  { icon: CheckCircle, title: '7-Day Money Back', desc: 'Not satisfied in the first week? We refund 100%, no questions asked.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center" style={{ background: 'rgba(232,25,44,0.15)' }}>
                      <Icon size={18} style={{ color: '#E8192C' }} />
                    </div>
                    <div>
                      <div className="text-white mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.95rem' }}>{title}</div>
                      <div style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                MEET THE TEAM
              </span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
                Your Expert<br /><span style={{ color: '#E8192C' }}>Coaches</span>
              </h2>
            </div>
            <Link to="/coaches" className="flex items-center gap-2 text-sm" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              All Coaches <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {coaches.map((c) => (
              <div key={c.name} className="group rounded-2xl overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative h-72 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase' }}>{c.name}</div>
                    <div style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.8rem' }}>{c.title}</div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>Experience</div>
                    <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{c.exp}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs mb-1" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>Certifications</div>
                    <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{c.certs}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              MEMBERSHIP PLANS
            </span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              Simple, Transparent<br /><span style={{ color: '#E8192C' }}>Pricing</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-7 relative"
                style={{
                  background: plan.popular ? '#E8192C' : '#111111',
                  border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.06)',
                  transform: plan.popular ? 'scale(1.03)' : 'none',
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs text-white" style={{ background: '#111111', fontFamily: "'Inter', sans-serif", fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)' }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-5">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', color: plan.popular ? 'rgba(255,255,255,0.8)' : '#888888', letterSpacing: '0.05em' }}>{plan.name}</div>
                  <div className="flex items-baseline gap-1 my-2">
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.5rem', color: '#FFFFFF', lineHeight: 1 }}>{plan.price}</span>
                    <span style={{ color: plan.popular ? 'rgba(255,255,255,0.7)' : '#666', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>{plan.period}</span>
                  </div>
                  <div style={{ color: plan.popular ? 'rgba(255,255,255,0.75)' : '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>{plan.desc}</div>
                </div>
                <div className="flex flex-col gap-3 mb-7">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: plan.popular ? 'rgba(255,255,255,0.9)' : '#22C55E' }} />
                      <span style={{ color: plan.popular ? 'rgba(255,255,255,0.9)' : '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="block text-center py-3 rounded-lg text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: plan.popular ? '#FFFFFF' : '#E8192C',
                    color: plan.popular ? '#E8192C' : '#FFFFFF',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="text-sm" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>
              Compare all features → <span style={{ color: '#E8192C' }}>View Full Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              TESTIMONIALS
            </span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              What Our Clients<br /><span style={{ color: '#E8192C' }}>Say About Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="mb-5 leading-relaxed" style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', lineHeight: 1.7 }}>
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{t.name}</div>
                      <div className="text-xs" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{t.location}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                    {t.loss}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <BMISection />

      {/* App Preview */}
      <section className="py-20 overflow-hidden" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative flex justify-center">
              <div className="relative">
                <div
                  className="w-64 h-[520px] rounded-[3rem] overflow-hidden shadow-2xl"
                  style={{ background: '#111111', border: '8px solid #1A1A1A', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(232,25,44,0.2)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop&auto=format"
                    alt="Transcripto App"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.3), rgba(8,8,8,0.7))' }} />
                  <div className="absolute top-8 left-4 right-4">
                    <div className="text-xs text-white mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Good Morning, Priya! 👋</div>
                    <div className="p-3 rounded-xl" style={{ background: 'rgba(232,25,44,0.9)', backdropFilter: 'blur(10px)' }}>
                      <div className="text-xs text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Today's Goal</div>
                      <div className="text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.3rem' }}>1,450 kcal</div>
                    </div>
                  </div>
                </div>
                {/* Floating cards */}
                <div className="absolute -right-8 top-20 p-3 rounded-xl w-36" style={{ background: 'rgba(8,8,8,0.9)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div className="text-xs mb-1" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>Water today</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#3B82F6' }}>6 / 8 🥤</div>
                </div>
                <div className="absolute -left-8 bottom-24 p-3 rounded-xl w-36" style={{ background: 'rgba(8,8,8,0.9)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div className="text-xs mb-1" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>Steps</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#22C55E' }}>8,247 🏃</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                COMING SOON
              </span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem' }}>
                Your Transformation<br />In Your Pocket<br /><span style={{ color: '#E8192C' }}>Transcripto App</span>
              </h2>
              <p className="mb-8" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
                Track meals, workouts, water intake, and chat directly with your coach — all in one powerful app. Available on iOS and Android.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: Smartphone, text: 'Real-time meal & calorie tracking' },
                  { icon: Activity, text: 'Workout logging with video guidance' },
                  { icon: Users, text: 'Direct coach messaging' },
                  { icon: Trophy, text: 'Weekly progress reports & milestones' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center" style={{ background: 'rgba(232,25,44,0.15)' }}>
                      <Icon size={16} style={{ color: '#E8192C' }} />
                    </div>
                    <span style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="px-5 py-3 rounded-xl text-sm text-white" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  🍎 App Store
                </a>
                <a href="#" className="px-5 py-3 rounded-xl text-sm text-white" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  🤖 Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Contact CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: '#E8192C' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '1.5rem',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            }}
          >
            Ready To Start<br />Your Transformation?
          </h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', lineHeight: 1.7 }}>
            Get a free consultation with our top coaches. No commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:opacity-95 active:scale-95"
              style={{ background: '#FFFFFF', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded text-base text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
