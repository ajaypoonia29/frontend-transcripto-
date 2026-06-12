import { Link } from 'react-router';
import { ArrowRight, CheckCircle, X, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Begin your journey',
    monthly: '₹2,999',
    quarterly: '₹7,999',
    features: [
      { label: 'Dedicated Coach', yes: true },
      { label: 'Personalized Diet Plan', yes: true },
      { label: 'Home Workout Program', yes: true },
      { label: 'WhatsApp Support', yes: true },
      { label: 'Weekly Check-in Call', yes: false },
      { label: 'Blood Work Analysis', yes: false },
      { label: 'Supplement Guide', yes: false },
      { label: 'Priority Support', yes: false },
      { label: 'Recipe Library', yes: false },
      { label: 'Body Composition Analysis', yes: false },
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Transform',
    tagline: 'Maximum results',
    monthly: '₹4,999',
    quarterly: '₹12,999',
    features: [
      { label: 'Dedicated Coach', yes: true },
      { label: 'Personalized Diet Plan', yes: true },
      { label: 'Home & Gym Workout Program', yes: true },
      { label: 'WhatsApp Support', yes: true },
      { label: 'Weekly Check-in Calls (2/mo)', yes: true },
      { label: 'Blood Work Analysis', yes: true },
      { label: 'Supplement Guide', yes: true },
      { label: 'Priority Support', yes: true },
      { label: 'Recipe Library (200+ recipes)', yes: false },
      { label: 'Body Composition Analysis', yes: false },
    ],
    popular: true,
    cta: 'Start Transforming',
  },
  {
    name: 'Elite',
    tagline: 'Maximum accountability',
    monthly: '₹8,999',
    quarterly: '₹22,999',
    features: [
      { label: 'Dedicated Elite Coach', yes: true },
      { label: 'Personalized Diet Plan', yes: true },
      { label: 'Home & Gym Workout Program', yes: true },
      { label: '24/7 WhatsApp Access', yes: true },
      { label: 'Unlimited Coach Calls', yes: true },
      { label: 'Blood Work Analysis', yes: true },
      { label: 'Supplement Guide', yes: true },
      { label: 'Priority Support', yes: true },
      { label: 'Recipe Library (200+ recipes)', yes: true },
      { label: 'Monthly Body Composition Analysis', yes: true },
    ],
    popular: false,
    cta: 'Go Elite',
  },
];

const faqs = [
  { q: 'Can I switch plans later?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.' },
  { q: 'Is there a free trial?', a: 'Yes, we offer a 7-day free trial on the Starter plan. No credit card required to begin.' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, debit/credit cards, net banking, and EMI options for quarterly plans.' },
  { q: 'What if I\'m not satisfied?', a: 'We offer a full 7-day money-back guarantee. If you\'re not happy in the first week, we refund 100% — no questions asked.' },
];

export function Pricing() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>PRICING</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            Simple, Honest<br /><span style={{ color: '#E8192C' }}>Pricing</span>
          </h1>
          <p className="max-w-lg mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            No hidden fees, no confusing add-ons. Every plan includes a dedicated human coach.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.name}
                className="rounded-2xl overflow-hidden relative"
                style={{
                  background: plan.popular ? '#111111' : '#0D0D0D',
                  border: plan.popular ? '1px solid #E8192C' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {plan.popular && (
                  <div className="py-2 text-center text-xs text-white" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '0.08em' }}>
                    ⚡ MOST POPULAR
                  </div>
                )}
                <div className="p-7">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.05em' }}>{plan.name}</div>
                  <div className="text-sm mb-5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>{plan.tagline}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.8rem', color: '#FFFFFF', lineHeight: 1 }}>{plan.monthly}</span>
                    <span style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>/month</span>
                  </div>
                  <div className="mb-7 text-sm" style={{ color: '#555555', fontFamily: "'Inter', sans-serif" }}>or {plan.quarterly} for 3 months (save 10%)</div>

                  <div className="flex flex-col gap-3 mb-8">
                    {plan.features.map(f => (
                      <div key={f.label} className="flex items-center gap-2.5">
                        {f.yes
                          ? <CheckCircle size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                          : <X size={15} style={{ color: '#333', flexShrink: 0 }} />
                        }
                        <span style={{ color: f.yes ? '#CCCCCC' : '#444444', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem' }}>{f.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="block text-center py-3.5 rounded-lg text-sm transition-all hover:opacity-90"
                    style={{
                      background: plan.popular ? '#E8192C' : '#1A1A1A',
                      color: '#FFFFFF',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Money back */}
          <div className="mt-8 p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto" style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)' }}>
            <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: 'rgba(22,163,74,0.2)' }}>
              <Zap size={22} style={{ color: '#22C55E' }} />
            </div>
            <div>
              <div className="text-white text-sm text-center sm:text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>7-Day Money-Back Guarantee</div>
              <div className="text-sm text-center sm:text-left" style={{ color: '#888888', fontFamily: "'Inter', sans-serif" }}>Not satisfied in the first 7 days? We refund 100% of your payment, no questions asked.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-center mb-10" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
            Pricing <span style={{ color: '#E8192C' }}>FAQs</span>
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map(f => (
              <div key={f.q} className="p-5 rounded-xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-white mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.95rem' }}>{f.q}</div>
                <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
