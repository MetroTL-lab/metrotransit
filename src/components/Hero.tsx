import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin, Truck, CheckCircle2, Globe2, Building } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center bg-[#131313] overflow-hidden">
      
      {/* Background Photography with Dark Red Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
          alt="Metro Transit Fleet Logistics"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-[#131313]/80" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Core CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D61F26] animate-ping" />
              <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">
                Pan-African Corporate Logistics
              </span>
            </div>

            {/* Bold Headline with Sophisticated Dark Outline Style */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.85)' }}>
                FUTURE OF
              </span> <br />
              <span className="text-[#D61F26]">
                LOGISTICS.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Precision courier execution, cold-chain transit, and enterprise fleet outsourcing across West, East, and Southern Africa. Built on verified quality standards and guaranteed SLAs.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleScrollToContact}
                className="flex items-center gap-2.5 px-7 py-4 bg-[#D61F26] hover:bg-[#b8181e] text-white font-black text-sm rounded-xl shadow-xl shadow-[#D61F26]/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Contact Logistics Team</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-4 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-white font-bold text-sm rounded-xl transition-all hover:border-zinc-500"
              >
                <span>Our Capabilities</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="text-2xl font-black text-white block">99.4%</span>
                <span className="text-xs text-zinc-400 font-medium">On-time Delivery SLA</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">48+</span>
                <span className="text-xs text-zinc-400 font-medium">Metropolitan Hubs</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#D61F26] block">24/7</span>
                <span className="text-xs text-zinc-400 font-medium">Corporate Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column - Corporate Capabilities Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#121212]/95 border border-zinc-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-5">
              
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D61F26]" />

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D61F26] block">Overview</span>
                  <h3 className="text-lg font-bold text-white">Enterprise Network Highlights</h3>
                </div>
                <div className="w-9 h-9 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl flex items-center justify-center text-[#D61F26]">
                  <Truck className="w-5 h-5" />
                </div>
              </div>

              {/* Capabilities Grid List */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                  <div className="p-2 bg-[#D61F26]/10 text-[#D61F26] rounded-lg shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Pan-African Operations</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">Primary corporate gateways in Lagos, Nairobi, Accra, and Johannesburg.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                  <div className="p-2 bg-[#D61F26]/10 text-[#D61F26] rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Comprehensive Goods Protection</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">Built-in liability coverage up to ₦1,000,000 with optional high-value insurance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                  <div className="p-2 bg-[#D61F26]/10 text-[#D61F26] rounded-lg shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Dedicated SME & Fleet Outsourcing</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">Tailored merchant contracts, scheduled daily runs, and dedicated rider fleets.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="pt-2">
                <button
                  onClick={handleScrollToContact}
                  className="w-full py-3 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D61F26]/20"
                >
                  <span>Request Corporate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Security Badge */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Quality Standard</span>
                </span>
                <span>24/7 Support Desk</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

