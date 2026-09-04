import React from 'react';
import { MousePointerClick, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Inquiry',
      subtitle: 'Online, Email or Direct Phone',
      description: 'Specify your pickup/destination locations, package dimensions, temperature controls, or scheduled frequency needs.',
      icon: MousePointerClick
    },
    {
      number: '02',
      title: 'Dispatched Rider Pickup',
      subtitle: '20-Min Verified Courier Arrival',
      description: 'A background-verified Metro rider arrives at your doorstep or warehouse with insulated, tamper-evident security boxes.',
      icon: Truck
    },
    {
      number: '03',
      title: 'Safely Delivered',
      subtitle: 'Live Tracking & Digital Verification',
      description: 'Receive real-time progress updates. Instant digital photo proof and customer signature log complete the chain of custody.',
      icon: CheckCircle2
    }
  ];

  const handleInquireClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">Streamlined Logistics Flow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How It Works in <span className="text-[#D61F26]">3 Simple Steps.</span>
          </h2>
          <p className="text-sm text-zinc-400">
            From inquiry to final delivery verification, experience zero-headache courier execution.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-zinc-800 rounded-2xl p-8 relative space-y-5 hover:border-[#D61F26]/60 transition-all hover:-translate-y-1 shadow-xl"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#D61F26] font-mono tracking-tight">{step.number}</span>
                  <div className="p-3 bg-[#181818] border border-zinc-700/80 rounded-xl text-white">
                    <IconComp className="w-6 h-6 text-[#D61F26]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <span className="text-xs font-semibold text-[#D61F26] uppercase tracking-wider block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SLA Guarantee Protected</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-zinc-900 via-[#121212] to-zinc-900 border border-zinc-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Ready to partner with Metro Logistics?</h3>
            <p className="text-xs text-zinc-400">Inquire about customized enterprise volume pricing or SME merchant accounts today.</p>
          </div>
          <button
            onClick={handleInquireClick}
            className="px-6 py-3.5 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-xs rounded-xl shadow-lg shadow-[#D61F26]/20 transition-all flex items-center gap-2"
          >
            <span>Contact Logistics Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

