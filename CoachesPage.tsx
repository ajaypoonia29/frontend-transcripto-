import { Link } from 'react-router';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

const coaches = [
  { name: 'Vikram Nair', title: 'Head Coach & Founder', specialty: 'Weight Loss & Metabolic Health', exp: '12 years', clients: '2,000+', rating: 4.9, certs: ['ACE Certified', 'Precision Nutrition L2', 'ACSM'], img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&auto=format', bio: 'Vikram founded Transcripto after watching his family struggle with conventional diet advice. He specializes in sustainable fat loss for busy professionals and has personally coached over 2,000 clients.' },
  { name: 'Deepika Rao', title: "Women's Fitness Specialist", specialty: 'PCOS & Hormonal Health', exp: '9 years', clients: '1,500+', rating: 4.9, certs: ['NASM-CPT', 'PCOS Specialist', 'Pre/Postnatal Coach'], img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&auto=format', bio: 'Deepika is India\'s most trusted PCOS fitness coach. Her hormone-first approach has helped thousands of women regularize their cycles, lose weight, and reclaim their confidence.' },
  { name: 'Arjun Kapoor', title: 'Strength & Conditioning Coach', specialty: 'Muscle Gain & Athletic Performance', exp: '10 years', clients: '1,200+', rating: 4.8, certs: ['CSCS', 'NSA', 'SFG Kettlebell'], img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop&auto=format', bio: 'Former competitive powerlifter and national-level coach, Arjun brings elite-level training principles to everyday clients. His progressive overload methodology delivers exceptional muscle-building results.' },
  { name: 'Ananya Patel', title: 'Registered Dietitian', specialty: 'Clinical Nutrition & Diabetes Management', exp: '7 years', clients: '900+', rating: 4.9, certs: ['RD', 'CDE', 'Gut Health Specialist'], img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&auto=format', bio: 'Ananya is a registered dietitian specializing in managing lifestyle diseases through nutrition. Her Indian-first approach to meal planning has helped hundreds manage diabetes, thyroid issues, and PCOS.' },
  { name: 'Rohit Sharma', title: 'Sports Nutrition Coach', specialty: 'Athletic Performance & Body Composition', exp: '8 years', clients: '1,100+', rating: 4.8, certs: ['ISSN', 'ACE', 'CrossFit L2'], img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&auto=format', bio: 'Rohit worked with national-level athletes before joining Transcripto to bring sports nutrition principles to the general population. He specializes in body recomposition and performance optimization.' },
  { name: 'Priti Desai', title: 'Yoga & Mindful Fitness Coach', specialty: 'Stress Management & Low-Impact Training', exp: '11 years', clients: '800+', rating: 4.9, certs: ['E-RYT 500', 'Mindfulness Coach', 'Nutrition Coach'], img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&auto=format', bio: 'Priti combines yoga, breathwork, and nutrition to help clients manage stress-related weight gain. Her holistic approach is especially effective for clients with hormonal imbalances and cortisol issues.' },
];

export function CoachesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>MEET THE TEAM</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            Expert Coaches,<br /><span style={{ color: '#E8192C' }}>Real Results</span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Every Transcripto coach holds globally recognized certifications with 7–12 years of real coaching experience.
          </p>
        </div>
      </section>

      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map(c => (
              <div key={c.name} className="rounded-2xl overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative h-72">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95), transparent 50%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', textTransform: 'uppercase' }}>{c.name}</h3>
                    <div style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.8rem' }}>{c.title}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-center gap-1">
                      <Star size={13} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ color: '#F59E0B', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.85rem' }}>{c.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={13} style={{ color: '#888888' }} />
                      <span style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{c.clients} clients</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={13} style={{ color: '#888888' }} />
                      <span style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{c.exp}</span>
                    </div>
                  </div>
                  <div className="text-xs mb-2" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.specialty}</div>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{c.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.certs.map(cert => (
                      <span key={cert} className="px-2 py-0.5 rounded text-xs" style={{ background: 'rgba(255,255,255,0.06)', color: '#AAAAAA', fontFamily: "'Inter', sans-serif" }}>{cert}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1rem' }}>
            Get Matched With<br />Your <span style={{ color: '#E8192C' }}>Perfect Coach</span>
          </h2>
          <p className="mb-6" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Take our 2-minute quiz and we'll match you with the coach best suited for your goal.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded text-white" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            Find My Coach <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
