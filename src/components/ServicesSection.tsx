import React from 'react';
import { PackageCheck, ThermometerSnowflake, Building2, CalendarClock, Handshake, Zap, ArrowRight, Shield, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIconComponent = (name: string) => {
    switch (name) {
      case 'PackageCheck': return PackageCheck;
      case 'ThermometerSnowflake': return ThermometerSnowflake;
      case 'Building2': return Building2;
      case 'CalendarClock': return CalendarClock;
      case 'Handshake': return Handshake;
      case 'Zap': return Zap;
      default: return PackageCheck;
    }
  };

  const handleInquireClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
              <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">Comprehensive Logistics Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Specialized <span className="text-[#D61F26]">Delivery Services.</span>
            </h2>
            <p className="text-sm text-zinc-400">
              Engineered for individuals, urban merchants, and multinational enterprises seeking dependable supply chain execution.
            </p>
          </div>

          <button
            onClick={handleInquireClick}
            className="self-start md:self-auto flex items-center gap-2 px-6 py-3 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-xs rounded-xl shadow-lg shadow-[#D61F26]/20 transition-all hover:scale-[1.02]"
          >
            <span>Inquire For Rates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = getIconComponent(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-[#121212] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#D61F26]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
                    
                    {service.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-[#D61F26] text-white text-[11px] font-bold rounded-full shadow-md">
                        {service.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-4 p-2.5 bg-[#121212] border border-zinc-700/80 rounded-xl text-[#D61F26] shadow-lg">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D61F26] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed pt-1">
                      {service.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800/80">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.estimatedDeliveryTime}</span>
                      </span>
                      <span className="font-bold text-white font-mono">{service.startingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-[#D61F26] text-zinc-200 hover:text-white font-bold text-xs rounded-xl border border-zinc-800 hover:border-[#D61F26] transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

