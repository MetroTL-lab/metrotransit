import React from 'react';
import { UserCheck, ShieldCheck, Clock, MapPin, Headphones, DollarSign, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Professional Riders & Couriers',
      description: 'Extensive background-checked, uniformed personnel trained in customer service and security protocols.',
      icon: UserCheck
    },
    {
      title: 'Secure Package Handling',
      description: 'Insulated thermal boxes, tamper-evident seals, and ₦1,000,000 baseline goods liability protection on every drop.',
      icon: ShieldCheck
    },
    {
      title: 'Reliable Delivery Timelines',
      description: '99.4% on-time completion SLA backed by real-time AI traffic route rerouting systems.',
      icon: Clock
    },
    {
      title: 'Live Telemetry & GPS Tracking',
      description: 'Watch your rider move in real time on map feeds with instant SMS and WhatsApp notifications.',
      icon: MapPin
    },
    {
      title: '24/7 Priority Support',
      description: 'Dedicated human support leads always available to resolve dispatch inquiries instantly.',
      icon: Headphones
    },
    {
      title: 'Affordable Transparent Pricing',
      description: 'No hidden surge fees. Clear distance and weight-based rates with merchant volume discounts.',
      icon: DollarSign
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">The Metro Transit Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Leading Businesses <span className="text-[#D61F26]">Choose Us.</span>
          </h2>
          <p className="text-sm text-zinc-400">
            Precision engineering applied to urban courier execution and bulk supply chain movement.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#121212] border border-zinc-800/90 rounded-2xl hover:border-[#D61F26]/50 transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D61F26]/5 rounded-bl-full group-hover:bg-[#D61F26]/10 transition-colors" />

                <div className="w-14 h-14 bg-[#181818] border border-zinc-700/80 rounded-2xl flex items-center justify-center text-[#D61F26] mb-6 group-hover:bg-[#D61F26] group-hover:text-white transition-all shadow-md">
                  <IconComponent className="w-7 h-7 stroke-[2]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D61F26] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
