import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react'; // Removed favicon import line from here

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'SME Partnerships', href: '#partnerships' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    window.open('https://riders.metrotransit.com.ng/', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#D61F26] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-4 py-2 bg-[#D61F26] hover:bg-[#b8181e] text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#D61F26]/20 hover:scale-[1.02]"
          >
            <span>Become A Rider</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D61F26]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-zinc-800 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-300 hover:text-[#D61F26] transition-colors py-1 border-b border-zinc-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={handleContactClick}
              className="w-full py-2.5 bg-[#D61F26] text-white text-xs font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Contact Logistics Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
