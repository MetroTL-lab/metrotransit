import React, { useState } from 'react';
import { Building2, Calendar, ShieldCheck, Layers, Handshake, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export const BusinessPartnerships: React.FC = () => {
  const [weeklyVolume, setWeeklyVolume] = useState<number>(150);

  // Calculate estimated monthly merchant savings
  const estimatedRetailCost = weeklyVolume * 4 * 3500; // ₦3,500 per parcel standard retail
  const partnerDiscountRate = weeklyVolume >= 500 ? 0.35 : weeklyVolume >= 200 ? 0.25 : 0.18;
  const monthlySavings = Math.round(estimatedRetailCost * partnerDiscountRate);
  const partnerMonthlyCost = Math.round(estimatedRetailCost - monthlySavings);

  const handleInquireClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    {
      title: 'Automated Scheduled Pickups',
      description: 'Daily fixed route pickups from your warehouse or store with zero booking hassle.',
      icon: Calendar
    },
    {
      title: 'Dedicated Logistics Account Manager',
      description: 'Direct human point of contact for custom dispatch routing and emergency orders.',
      icon: Building2
    },
    {
      title: 'Bulk & Multi-Stop Delivery Discounts',
      description: 'Tiered volume discounts saving your business up to 35% on monthly courier expenses.',
      icon: Layers
    },
    {
      title: 'Reliable Inventory Fulfillment',
      description: 'Micro-warehousing options and same-day drop-offs to keep customer satisfaction high.',
      icon: ShieldCheck
    },
    {
      title: 'Long-Term Partnership Terms',
      description: 'Weekly consolidated invoicing, SLA guarantees, and enterprise account management.',
      icon: Handshake
    }
  ];

  return (
    <section id="partnerships" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
              <Building2 className="w-3.5 h-3.5 text-[#D61F26]" />
              <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">SME & Enterprise Logistics</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Helping Businesses <br />
              <span className="text-[#D61F26]">Deliver Better.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Partner with Metro Transit Logistics to unlock a scalable, turnkey delivery engine. Stop worrying about fleet overhead, vehicle repairs, or unreliable riders—focus purely on growing your business while we handle the rest.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((h, idx) => {
                const IconComponent = h.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3 bg-[#121212] border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                    <div className="p-2.5 bg-[#181818] border border-zinc-700/80 rounded-lg text-[#D61F26] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{h.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{h.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={handleInquireClick}
                className="flex items-center gap-2.5 px-8 py-4 bg-[#D61F26] hover:bg-[#b8181e] text-white font-black text-sm rounded-xl shadow-xl shadow-[#D61F26]/30 transition-all hover:scale-[1.02]"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Informational Savings Estimator */}
          <div className="lg:col-span-5">
            <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D61F26]/10 rounded-bl-full" />

              <div>
                <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider block mb-1">
                  Volume Benchmark
                </span>
                <h3 className="text-xl font-bold text-white">SME Partner Monthly Savings Breakdown</h3>
                <p className="text-xs text-zinc-400 mt-1">Adjust your average weekly delivery volume:</p>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Weekly Orders:</span>
                  <span className="text-base font-black text-white font-mono">{weeklyVolume} parcels / week</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={weeklyVolume}
                  onChange={(e) => setWeeklyVolume(Number(e.target.value))}
                  className="w-full accent-[#D61F26] bg-zinc-800 rounded-lg cursor-pointer h-2.5"
                />
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>20/wk (Boutique)</span>
                  <span>500/wk (Growth)</span>
                  <span>1,000+/wk (Enterprise)</span>
                </div>
              </div>

              {/* Savings Output */}
              <div className="p-5 bg-gradient-to-br from-zinc-900 to-[#181818] border border-zinc-800 rounded-xl space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Standard Retail Rate:</span>
                  <span className="text-zinc-400 font-mono line-through">₦{estimatedRetailCost.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-300 font-semibold">Metro Partner Rate:</span>
                  <span className="text-white font-mono font-bold">₦{partnerMonthlyCost.toLocaleString()} / mo</span>
                </div>
                <div className="pt-2 border-t border-zinc-800 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase text-emerald-400">Your Monthly Savings:</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">+₦{monthlySavings.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes dedicated account lead + weekly consolidated invoice</span>
              </div>

              <button
                onClick={handleInquireClick}
                className="w-full py-3 bg-zinc-900 hover:bg-[#D61F26] border border-zinc-700 hover:border-[#D61F26] text-white font-bold text-xs rounded-xl transition-all"
              >
                Inquire For Partnership
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

