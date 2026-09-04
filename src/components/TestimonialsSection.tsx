import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'SME' | 'Enterprise' | 'E-commerce' | 'Corporate'>('All');

  const categories = ['All', 'SME', 'Enterprise', 'E-commerce', 'Corporate'] as const;

  const filteredTestimonials = filter === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === filter);

  return (
    <section id="testimonials" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">Client Reviews & Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trusted by Thousands Across <span className="text-[#D61F26]">Africa.</span>
          </h2>
          <p className="text-sm text-zinc-400">
            Discover why growing merchants, e-commerce platforms, and corporations rely on Metro Transit Logistics every day.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-[#D61F26] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-[#121212] border border-zinc-800 rounded-2xl relative space-y-6 hover:border-[#D61F26]/50 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Partner
                  </span>
                </div>

                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-zinc-400">{t.role}, <span className="text-[#D61F26] font-semibold">{t.company}</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                  <MapPin className="w-3 h-3 text-[#D61F26]" />
                  <span>{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
