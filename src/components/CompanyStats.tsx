import React from 'react';
import { COMPANY_STATS } from '../data/mockData';
import { Package, Building2, MapPin, Smile } from 'lucide-react';

export const CompanyStats: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Package;
      case 1: return Building2;
      case 2: return MapPin;
      default: return Smile;
    }
  };

  return (
    <section className="py-20 bg-[#131313] relative border-t border-b border-zinc-800/80">
      
      {/* Background Accent glow */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat, idx) => {
            const IconComp = getIcon(idx);
            
            // Formatting helper for big numbers
            const formattedVal = stat.value >= 1000000 
              ? (stat.value / 1000000).toFixed(1) + 'M' 
              : stat.value >= 1000 
              ? (stat.value / 1000).toFixed(1) + 'k' 
              : stat.value.toString();

            return (
              <div
                key={idx}
                className="p-8 bg-[#121212] border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-[#D61F26]/60 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-[#D61F26] transition-colors">
                    {formattedVal}{stat.suffix}
                  </span>
                  <div className="p-3 bg-[#181818] border border-zinc-700/80 rounded-xl text-[#D61F26]">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">{stat.label}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{stat.description}</p>
                
                {/* Accent line */}
                <div className="mt-4 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D61F26] rounded-full w-3/4 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
