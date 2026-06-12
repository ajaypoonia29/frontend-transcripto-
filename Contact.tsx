import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>GET IN TOUCH</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            Book Your Free<br /><span style={{ color: '#E8192C' }}>Consultation</span>
          </h1>
          <p className="max-w-md mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Talk to a real coach about your goals. Zero commitment, zero cost.
          </p>
        </div>
      </section>

      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="p-8 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(22,163,74,0.15)' }}>
                    <CheckCircle size={32} style={{ color: '#22C55E' }} />
                  </div>
                  <h3 className="text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase' }}>Request Received!</h3>
                  <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
                    Our team will reach out within 2 hours to schedule your free consultation call.
                  </p>
                  <div className="mt-4 p-4 rounded-xl w-full" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="text-sm" style={{ color: '#CCCCCC', fontFamily: "'Inter', sans-serif" }}>
                      Can't wait? Chat with us on WhatsApp right now 👇
                    </p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-3 py-3 rounded-lg text-center text-sm text-white"
                      style={{ background: '#25D366', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      💬 Open WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.8rem', textTransform: 'uppercase' }}>Tell Us About Your Goal</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs mb-1.5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Priya Sharma"
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                          style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                          onFocus={e => e.currentTarget.style.borderColor = '#E8192C'}
                          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                        />
                      </div>
                      <div>
                        <label className="block text-xs mb-1.5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                          style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                          onFocus={e => e.currentTarget.style.borderColor = '#E8192C'}
                          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                      <input
                        type="email"
                        placeholder="priya@email.com"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                        style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                        onFocus={e => e.currentTarget.style.borderColor = '#E8192C'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Goal *</label>
                      <select
                        required
                        value={form.goal}
                        onChange={e => setForm({...form, goal: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg outline-none"
                        style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', color: form.goal ? '#FFFFFF' : '#666', fontFamily: "'Inter', sans-serif" }}
                      >
                        <option value="" disabled>Select your primary goal</option>
                        <option value="weight-loss">Weight Loss</option>
                        <option value="muscle-gain">Muscle Gain</option>
                        <option value="pcos">PCOS Management</option>
                        <option value="diet-plan">Diet Plan Only</option>
                        <option value="body-recomp">Body Recomposition</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tell Us More (optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Your current weight, target, health conditions, lifestyle..."
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg outline-none resize-none"
                        style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                        onFocus={e => e.currentTarget.style.borderColor = '#E8192C'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg text-white text-base transition-all hover:opacity-90 active:scale-98"
                      style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      Book Free Consultation →
                    </button>
                    <p className="text-xs text-center" style={{ color: '#555', fontFamily: "'Inter', sans-serif" }}>
                      We respond within 2 hours. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, title: 'Call / WhatsApp', info: '+91 98765 43210', sub: 'Mon–Sat, 9am–8pm IST' },
                { icon: Mail, title: 'Email Us', info: 'hello@transcripto.in', sub: 'Reply within 4 hours' },
                { icon: MapPin, title: 'Our Office', info: 'Mumbai, Maharashtra', sub: 'Online coaching — serve all India' },
                { icon: Clock, title: 'Working Hours', info: 'Mon–Saturday', sub: '9:00 AM – 8:00 PM IST' },
              ].map(({ icon: Icon, title, info, sub }) => (
                <div key={title} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ background: 'rgba(232,25,44,0.15)' }}>
                    <Icon size={20} style={{ color: '#E8192C' }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</div>
                    <div className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{info}</div>
                    <div className="text-xs" style={{ color: '#666', fontFamily: "'Inter', sans-serif" }}>{sub}</div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20Transcripto%20fitness%20coaching!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                <MessageSquare size={28} color="white" />
                <div>
                  <div className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1rem' }}>Chat on WhatsApp Instantly</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif" }}>We reply in under 5 minutes</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
