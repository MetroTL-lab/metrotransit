import React, { useState } from 'react';
import { 
  Smartphone, 
  Download, 
  QrCode, 
  Star, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Bell, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Sparkles,
  Bike,
  CreditCard,
  Layers
} from 'lucide-react';

export const DownloadAppSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneSent, setPhoneSent] = useState(false);
  const [activeTab, setActiveTab] = useState<'customer' | 'rider'>('customer');
  const [showQrModal, setShowQrModal] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setPhoneSent(true);
      setTimeout(() => {
        setPhoneSent(false);
        setPhoneNumber('');
      }, 5000);
    }
  };

  const appFeatures = [
    {
      icon: Zap,
      title: '60-Second Instant Booking',
      desc: 'Request on-demand motorbikes, cargo vans, or cold-chain trucks with upfront guaranteed pricing.'
    },
    {
      icon: MapPin,
      title: 'Live GPS Telemetry',
      desc: 'Watch your dedicated courier move across the map in real-time with millisecond ETA updates.'
    },
    {
      icon: ShieldCheck,
      title: 'Digital Proof of Delivery (POD)',
      desc: 'Instant recipient electronic signature & photographic delivery verification delivered to your email.'
    },
    {
      icon: CreditCard,
      title: 'Seamless In-App Wallet',
      desc: 'Automated corporate billing, zero-fee wallet top-ups, and downloadable monthly tax receipts.'
    }
  ];

  return (
    <section id="download-app" className="py-24 bg-[#131313] relative border-t border-zinc-800/80 overflow-hidden">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D61F26]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full shadow-sm">
            <Smartphone className="w-3.5 h-3.5 text-[#D61F26]" />
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">
              Mobile Logistics Experience
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Download the Metro Transit <span className="text-[#D61F26]">App.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl">
            Everything you need to book on-demand couriers, track multi-drop shipments, and manage business logistics right from your smartphone.
          </p>

          {/* User Mode Switcher */}
          <div className="flex items-center bg-zinc-900/90 border border-zinc-800 p-1 rounded-xl mt-4">
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'customer' 
                  ? 'bg-[#D61F26] text-white shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>For Customers & SMEs</span>
            </button>
            <button
              onClick={() => setActiveTab('rider')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'rider' 
                  ? 'bg-amber-500 text-black shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>For Drivers & Riders</span>
            </button>
          </div>
        </div>

        {/* Main Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Highlights & Download Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.9 / 5 Rating &bull; 50,000+ Active Dispatches</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {activeTab === 'customer' 
                  ? 'Instant deliveries, transparent pricing & corporate logistics in one tap.' 
                  : 'Earn daily, access high-value orders & manage routes with ease.'}
              </h3>
              
              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeTab === 'customer'
                  ? 'Whether you are sending a single urgent legal document or coordinating 100 daily e-commerce dispatches across Lagos and Abuja, the Metro Transit mobile app gives you complete operational control.'
                  : 'Get dedicated corporate order batches, guaranteed daily & weekly payouts, subsidized fuel stations, and full helmet safety kits.'}
              </p>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-4 bg-[#121212] border border-zinc-800/80 rounded-2xl space-y-2 hover:border-zinc-700 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D61F26]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* App Store Buttons & QR Action */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Available on iOS & Android
              </span>

              <div className="flex flex-wrap items-center gap-3">
                {/* Apple App Store */}
                <a
                  href="#download-app"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowQrModal(true);
                  }}
                  className="flex items-center gap-3 px-5 py-3 bg-[#161616] hover:bg-[#202020] border border-zinc-700 hover:border-zinc-500 rounded-xl text-white transition-all shadow-lg group"
                >
                  <svg className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.74 1.04-1.79.92-2.87-.93.04-2.02.63-2.67 1.39-.58.67-1.09 1.74-.96 2.78 1.04.08 2.08-.54 2.71-1.3" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Download on the</span>
                    <span className="block text-xs font-black text-white">Apple App Store</span>
                  </div>
                </a>

                {/* Google Play Store */}
                <a
                  href="#download-app"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowQrModal(true);
                  }}
                  className="flex items-center gap-3 px-5 py-3 bg-[#161616] hover:bg-[#202020] border border-zinc-700 hover:border-zinc-500 rounded-xl text-white transition-all shadow-lg group"
                >
                  <svg className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.985 1.985 0 0 1-.61-.758V2.572c.16-.3.37-.56.609-.758zm11.305 11.308L17.7 10.33a1.95 1.95 0 0 0 0-3.32l-2.786-2.792-3.122 3.122 3.122 5.782zM4.787.973L13.06 9.246 11.238 11.07 3.518 3.35c.34-.84 1.03-1.46 1.92-1.99.27-.16.56-.29.86-.387h.489zm8.273 13.781l-8.273 8.273c-.5.16-1.02.16-1.52-.01-.78-.47-1.43-1.08-1.75-1.89l7.72-7.72 3.823 1.347z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Get it on</span>
                    <span className="block text-xs font-black text-white">Google Play Store</span>
                  </div>
                </a>

                {/* QR Code Quick Trigger */}
                <button
                  onClick={() => setShowQrModal(!showQrModal)}
                  className="flex items-center gap-2 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs font-bold transition-all"
                >
                  <QrCode className="w-4 h-4 text-[#D61F26]" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              {/* Direct Link via Phone Input */}
              <div className="p-4 bg-[#121212] border border-zinc-800 rounded-2xl max-w-lg mt-4">
                <span className="text-[11px] font-bold text-zinc-300 block mb-2">
                  Or text a direct install link to your mobile phone:
                </span>
                
                {!phoneSent ? (
                  <form onSubmit={handleSendLink} className="flex gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 bg-[#181818] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D61F26]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#D61F26] hover:bg-[#b8181e] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Link</span>
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Download link dispatched to {phoneNumber}! Check your SMS / WhatsApp.</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Phone Mockup with Live Logistics UI */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              
              {/* Glow Behind Mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D61F26]/20 to-amber-500/20 rounded-[44px] blur-2xl transform scale-95" />

              {/* Device Bezel */}
              <div className="relative bg-[#181818] border-4 border-zinc-700/80 rounded-[44px] p-3.5 shadow-2xl overflow-hidden ring-1 ring-white/10">
                
                {/* Dynamic Island / Speaker notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Inner Screen Canvas */}
                <div className="bg-[#0e0e0e] rounded-[36px] overflow-hidden text-zinc-100 border border-zinc-800 p-4 pt-8 space-y-4 relative">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-400 px-1">
                    <span className="font-bold text-white">09:41</span>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[9px] text-emerald-400">5G</span>
                      <span className="w-3 h-2 border border-zinc-400 rounded-sm inline-block" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#D61F26] flex items-center justify-center text-white font-black text-xs shadow-sm">
                        MT
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-white leading-none">Metro Transit</h5>
                        <span className="text-[9px] text-zinc-400">Corporate Express</span>
                      </div>
                    </div>
                    <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-full relative">
                      <Bell className="w-3.5 h-3.5 text-zinc-300" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-[#D61F26] rounded-full" />
                    </div>
                  </div>

                  {/* Live Active Shipment Tracking Card */}
                  <div className="bg-gradient-to-br from-[#161616] to-[#1c1213] border border-[#D61F26]/30 rounded-2xl p-3.5 space-y-3 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="px-2 py-0.5 bg-[#D61F26]/20 text-[#D61F26] font-bold rounded-full uppercase tracking-wider">
                        In-Transit Express
                      </span>
                      <span className="font-mono text-zinc-400">TRK-882194</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Lekki Phase 1 &rarr; Ikeja GRA</span>
                        <span className="text-[11px] font-bold text-emerald-400">8 mins away</span>
                      </div>
                      <p className="text-[10px] text-zinc-400">Refrigerated Pharma Bio-Cargo &bull; 2.5 kg</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-[#D61F26] rounded-full animate-pulse" />
                      </div>
                      <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                        <span>Dispatched</span>
                        <span className="text-amber-400 font-bold">On Route</span>
                        <span>Delivered</span>
                      </div>
                    </div>

                    {/* Assigned Courier Mini Profile */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-amber-400">
                          MB
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-white block leading-tight">Musa B. (Motorbike #14)</span>
                          <span className="text-[9px] text-zinc-400">Verified Rider &bull; 4.96 ★</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[9px] rounded-lg">
                        Live GPS
                      </span>
                    </div>
                  </div>

                  {/* Quick Action Grid inside Mockup */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl space-y-1">
                      <Zap className="w-4 h-4 text-[#D61F26]" />
                      <span className="text-[10px] font-bold text-white block">Book Dispatch</span>
                      <span className="text-[9px] text-zinc-500 block leading-tight">Instant courier match</span>
                    </div>
                    <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl space-y-1">
                      <CreditCard className="w-4 h-4 text-amber-400" />
                      <span className="text-[10px] font-bold text-white block">SME Wallet</span>
                      <span className="text-[9px] text-emerald-400 font-mono block leading-tight">₦485,000 Bal</span>
                    </div>
                  </div>

                  {/* Bottom Action Button inside phone */}
                  <div className="pt-1">
                    <button className="w-full py-2.5 bg-[#D61F26] text-white font-extrabold text-[11px] rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#D61F26]/30">
                      <span>Create New Shipment</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Home Bar */}
                  <div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto pt-0.5" />

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* QR Code Modal / Drawer */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-zinc-800 rounded-3xl p-8 max-w-sm w-full text-center space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs font-bold p-2"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#D61F26]/10 border border-[#D61F26]/30 flex items-center justify-center mx-auto text-[#D61F26]">
              <QrCode className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Scan to Download App</h4>
              <p className="text-xs text-zinc-400">Point your smartphone camera at the code below to install Metro Transit Logistics app.</p>
            </div>

            {/* Rendered Visual QR Pattern Container */}
            <div className="p-4 bg-white rounded-2xl inline-block shadow-xl mx-auto">
              <div className="w-44 h-44 bg-zinc-950 p-2 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                {/* SVG QR Visual */}
                <svg className="w-full h-full text-white fill-current" viewBox="0 0 100 100">
                  <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z" />
                  <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z" />
                  <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z" />
                  <rect x="45" y="10" width="5" height="15" />
                  <rect x="50" y="25" width="5" height="15" />
                  <rect x="45" y="45" width="15" height="5" />
                  <rect x="10" y="45" width="20" height="5" />
                  <rect x="75" y="45" width="15" height="5" />
                  <rect x="65" y="60" width="10" height="10" />
                  <rect x="80" y="60" width="10" height="5" />
                  <rect x="85" y="75" width="5" height="15" />
                  <rect x="65" y="80" width="15" height="5" />
                  <rect x="50" y="65" width="5" height="25" />
                  <rect x="45" y="55" width="5" height="5" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 bg-[#D61F26] rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-lg border-2 border-white">
                    MT
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 font-medium">
              Supports iOS 15.0+ and Android 9.0+
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
