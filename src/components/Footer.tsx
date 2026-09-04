import React, { useState } from 'react';
import { Truck, ArrowRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    window.open('https://riders.metrotransit.com.ng/', '_blank');
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#131313] border-t border-zinc-800 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Banner Callout */}
        <div className="p-8 bg-gradient-to-r from-zinc-900 via-[#121212] to-zinc-900 border border-zinc-800 rounded-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white">Subscribe to Metro Logistics Market Insights</h3>
            <p className="text-xs text-zinc-400">Receive monthly supply chain reports, African trade updates & SME delivery perks.</p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                required
                placeholder="Enter work email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-[#181818] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D61F26] min-w-[240px]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-xs rounded-xl transition-all whitespace-nowrap shadow-md shadow-[#D61F26]/20"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed! Thank you for joining Metro Logistics insights.</span>
            </div>
          )}
        </div>

        {/* 4 Column Links Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Col 1 - Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
                {/* Vite will successfully serve this from your public folder */}
                <img 
                  src="/images/favicon.svg" 
                  alt="Metro Transit Logistics Logo" 
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block uppercase leading-none">
                  Metro Transit <span className="text-[#D61F26]">Logistics</span>
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-zinc-400 block uppercase mt-0.5">
                  ADVANCED MOBILITY & LOGISTICS INFRASTRUCTURE
                </span>
              </div>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Metro Transit Logistics is a pan-African corporate courier and supply chain platform engineered for discipline, speed, and uncompromising trust across 48+ metropolitan hubs.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Freight Security</span>
              </span>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#D61F26] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D61F26] transition-colors">About Metro</a></li>
              <li><a href="#services" className="hover:text-[#D61F26] transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-[#D61F26] transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D61F26] transition-colors">How It Works</a></li>
              <li><a href="#partnerships" className="hover:text-[#D61F26] transition-colors">SME Partnerships</a></li>
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Logistics Tiers</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#D61F26] transition-colors">Express Parcel Delivery</a></li>
              <li><a href="#services" className="hover:text-[#D61F26] transition-colors">Cold Chain & Food Delivery</a></li>
              <li><a href="#services" className="hover:text-[#D61F26] transition-colors">SME Fulfillment Solutions</a></li>
              <li><a href="#services" className="hover:text-[#D61F26] transition-colors">Scheduled Merchant Pickups</a></li>
              <li><a href="#partnerships" className="hover:text-[#D61F26] transition-colors">Business Fleet Outsourcing</a></li>
              <li><a href="#services" className="hover:text-[#D61F26] transition-colors">Same-Day Urban Express</a></li>
            </ul>
          </div>

          {/* Col 4 - Direct Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Inquire & Reach Us</h4>
            <div className="space-y-2">
              <button
                onClick={handleScrollToContact}
                className="w-full py-2.5 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-xs rounded-xl transition-all text-center block shadow-md"
              >
                Inquire For Rates
              </button>
              <button
                onClick={handleContactClick}
                className="w-full py-2.5 bg-[#D61F26] hover:bg-[#b8181e] text-white font-bold text-xs rounded-xl transition-all text-center block shadow-md"
              >
                Become A Rider
              </button>
              <a
                href="#partnerships"
                className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl transition-all text-center block"
              >
                SME Partnership Info
              </a>
              <a
                href="#contact"
                className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl transition-all text-center block"
              >
                Contact Customer Care
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Metro Transit Logistics. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">
              Security Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

