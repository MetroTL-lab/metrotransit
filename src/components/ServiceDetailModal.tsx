import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight, Package, Truck, Zap, ThermometerSnowflake, Building2, CalendarClock, Handshake } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'PackageCheck': return <Package className="w-6 h-6 text-[#D61F26]" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-6 h-6 text-[#D61F26]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#D61F26]" />;
      case 'CalendarClock': return <CalendarClock className="w-6 h-6 text-[#D61F26]" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-[#D61F26]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#D61F26]" />;
      default: return <Truck className="w-6 h-6 text-[#D61F26]" />;
    }
  };

  const handleInquire = () => {
    onClose();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-zinc-800 rounded-2xl shadow-2xl text-zinc-100 overflow-hidden my-8">
        
        {/* Banner image background */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-300 hover:text-white bg-black/60 hover:bg-black rounded-lg backdrop-blur transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#111111] border border-zinc-700 rounded-xl">
                {renderIcon(service.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#D61F26] tracking-wider block">Service Overview</span>
                <h2 className="text-2xl font-bold text-white tracking-tight">{service.title}</h2>
              </div>
            </div>
            {service.badge && (
              <span className="px-3 py-1 bg-[#D61F26] text-white text-xs font-bold rounded-full">
                {service.badge}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-3 p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs">
            <div>
              <span className="text-zinc-500 uppercase font-semibold block">Est. SLA Window</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{service.estimatedDeliveryTime}</span>
              </span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase font-semibold block">Starting Rate</span>
              <span className="text-white font-bold text-sm mt-0.5">{service.startingPrice}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Service Guarantees & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-zinc-900/50 border border-zinc-800/80 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#D61F26] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white block">Ideal For:</span>
              <span className="text-xs text-zinc-300">{service.popularFor}</span>
            </div>
            <ShieldCheck className="w-6 h-6 text-[#D61F26]" />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm text-zinc-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleInquire}
              className="flex items-center gap-2 px-6 py-3 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-[#D61F26]/20"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

