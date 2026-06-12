import { Link } from 'react-router';
import { ArrowRight, Clock, User } from 'lucide-react';

const featured = {
  title: '10 Indian Foods That Accelerate Fat Loss (Backed by Science)',
  excerpt: 'Forget diet myths. These 10 everyday Indian foods are scientifically proven to boost metabolism, reduce inflammation, and support healthy fat loss without any exotic supplements.',
  author: 'Vikram Nair',
  date: 'June 8, 2024',
  readTime: '8 min read',
  category: 'Nutrition',
  img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=500&fit=crop&auto=format',
};

const articles = [
  { title: 'Why Most Indian Diets Fail (And How to Fix Yours)', excerpt: 'The common mistakes Indians make with portion sizes, oil usage, and meal timing — and what actually works.', author: 'Ananya Patel', date: 'June 5, 2024', readTime: '6 min', category: 'Nutrition', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop&auto=format' },
  { title: 'PCOS & Weight Loss: The Complete Indian Guide', excerpt: 'Everything you need to know about managing PCOS through diet and exercise — tailored for Indian women.', author: 'Deepika Rao', date: 'June 2, 2024', readTime: '10 min', category: 'PCOS', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=300&fit=crop&auto=format' },
  { title: 'Progressive Overload Explained: The Key to Muscle Growth', excerpt: 'The single most important principle for muscle building that most Indian gym-goers are completely ignoring.', author: 'Arjun Kapoor', date: 'May 28, 2024', readTime: '7 min', category: 'Fitness', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop&auto=format' },
  { title: 'How to Lose Weight During Festivals Without Missing Out', excerpt: 'Diwali, Eid, Navratri — you can enjoy every celebration and still stay on track. Here\'s how.', author: 'Vikram Nair', date: 'May 22, 2024', readTime: '5 min', category: 'Nutrition', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&auto=format' },
  { title: '7 Home Workout Mistakes That Are Killing Your Progress', excerpt: 'Training at home doesn\'t mean training blind. These 7 common mistakes are preventing you from seeing results.', author: 'Arjun Kapoor', date: 'May 18, 2024', readTime: '6 min', category: 'Fitness', img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&h=300&fit=crop&auto=format' },
  { title: 'Protein for Vegetarians: Complete Guide for Indian Diet', excerpt: 'Getting enough protein on a vegetarian Indian diet is 100% possible. Here are the best sources and meal combos.', author: 'Ananya Patel', date: 'May 14, 2024', readTime: '9 min', category: 'Nutrition', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop&auto=format' },
];

const categories = ['All', 'Nutrition', 'Fitness', 'PCOS', 'Mindset', 'Recipes'];
const categoryColors: Record<string, string> = { Nutrition: '#22C55E', Fitness: '#E8192C', PCOS: '#8B5CF6', Mindset: '#F59E0B', Recipes: '#3B82F6' };

export function Blog() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>KNOWLEDGE HUB</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            Fitness &amp; Nutrition<br /><span style={{ color: '#E8192C' }}>Insights</span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Science-backed advice for real Indian people. No myths, no fluff — just what actually works.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-10" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs text-white" style={{ background: categoryColors[featured.category] ?? '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{featured.category}</span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="text-xs mb-3" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Featured Article</div>
                <h2 className="text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', textTransform: 'uppercase', lineHeight: 1.05 }}>{featured.title}</h2>
                <p className="mb-5" style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", lineHeight: 1.7, fontSize: '0.9rem' }}>{featured.excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-sm" style={{ color: '#666', fontFamily: "'Inter', sans-serif" }}>
                  <span className="flex items-center gap-1"><User size={13} /> {featured.author}</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c => (
              <button key={c} className="px-4 py-1.5 rounded-full text-sm" style={{ background: c === 'All' ? '#E8192C' : '#111111', color: c === 'All' ? '#FFFFFF' : '#888888', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(a => (
              <a key={a.title} href="#" className="block rounded-2xl overflow-hidden group transition-transform hover:-translate-y-1 duration-200" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-full text-xs text-white" style={{ background: categoryColors[a.category] ?? '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{a.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.15rem', textTransform: 'uppercase', lineHeight: 1.1 }}>{a.title}</h3>
                  <p className="mb-4 text-sm" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{a.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#666', fontFamily: "'Inter', sans-serif" }}>
                    <span>{a.author}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {a.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
