import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Apple, Utensils, Star } from 'lucide-react';

const mealCategories = [
  { name: 'Weight Loss Plan', cal: '1,200–1,500 kcal', desc: 'Calorie-deficit plan with high satiety Indian foods. Never feel hungry.', color: '#E8192C' },
  { name: 'Maintenance Plan', cal: '1,600–2,000 kcal', desc: 'For those at their goal weight wanting to maintain muscle and stay healthy.', color: '#3B82F6' },
  { name: 'Muscle Building Plan', cal: '2,200–2,800 kcal', desc: 'High-protein plan for muscle gain with progressive calorie surplus.', color: '#22C55E' },
  { name: 'PCOS Nutrition Plan', cal: '1,400–1,800 kcal', desc: 'Low-GI, anti-inflammatory foods to balance hormones and reduce insulin resistance.', color: '#8B5CF6' },
];

const sampleDay = [
  { meal: 'Breakfast', time: '8:00 AM', items: 'Moong dal chilla (2) + green chutney + buttermilk', cal: '320 kcal' },
  { meal: 'Mid-Morning', time: '10:30 AM', items: 'Handful of soaked almonds + seasonal fruit', cal: '150 kcal' },
  { meal: 'Lunch', time: '1:00 PM', items: 'Rajma (1 cup) + jeera rice (½ cup) + salad + curd', cal: '420 kcal' },
  { meal: 'Evening Snack', time: '4:30 PM', items: 'Roasted makhana (30g) + masala chai (no sugar)', cal: '130 kcal' },
  { meal: 'Dinner', time: '7:30 PM', items: 'Palak paneer (½ cup) + 2 multigrain rotis + cucumber raita', cal: '380 kcal' },
];

export function DietPlans() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>NUTRITION COACHING</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
            Custom Indian<br /><span style={{ color: '#E8192C' }}>Diet Plans</span>
          </h1>
          <p className="max-w-xl mx-auto mb-8" style={{ color: '#888888', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Crafted by registered dietitians. 100% Indian cuisine. No bland food, no boiled chicken — just delicious meals that get you results.
          </p>
        </div>
      </section>

      {/* Plan types */}
      <section className="pb-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mealCategories.map(c => (
              <div key={c.name} className="p-6 rounded-2xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-2 h-10 rounded-full mb-4" style={{ background: c.color }} />
                <h3 className="text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase' }}>{c.name}</h3>
                <div className="text-sm mb-3" style={{ color: c.color, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{c.cal}</div>
                <p style={{ color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample day */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1 }}>
              Sample Day On A<br /><span style={{ color: '#E8192C' }}>Weight Loss Plan</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {sampleDay.map((m, i) => (
              <div key={m.meal} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: i === 0 ? 'rgba(232,25,44,0.15)' : '#1A1A1A' }}>
                  <Utensils size={18} style={{ color: i === 0 ? '#E8192C' : '#666' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{m.meal}</span>
                    <span className="text-xs" style={{ color: '#666', fontFamily: "'Inter', sans-serif" }}>{m.time}</span>
                  </div>
                  <p style={{ color: '#AAAAAA', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>{m.items}</p>
                </div>
                <div className="flex-shrink-0 text-sm" style={{ color: '#22C55E', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{m.cal}</div>
              </div>
            ))}
            <div className="flex justify-end mt-2">
              <div className="p-3 rounded-xl" style={{ background: 'rgba(232,25,44,0.15)', border: '1px solid rgba(232,25,44,0.2)' }}>
                <span className="text-sm" style={{ color: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Total: 1,400 kcal/day</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded text-white" style={{ background: '#E8192C', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              Get My Custom Diet Plan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
