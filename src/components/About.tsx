import React, { useState } from 'react';
import { Target, Eye, Award, ShieldCheck, Cpu, HeartHandshake, CheckCircle, Building } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const pillarItems = [
    {
      title: 'Professionalism',
      description: 'Uniformed, background-checked riders and logistics specialists operating with strict corporate decorum.',
      icon: Award
    },
    {
      title: 'Accountability',
      description: 'Full digital audit trails, OTP signature verification, and 100% transparent GPS telemetry.',
      icon: ShieldCheck
    },
    {
      title: 'Innovation',
      description: 'Next-generation route optimization AI, climate-controlled cold chain sensors, and merchant API sync.',
      icon: Cpu
    },
    {
      title: 'Customer Satisfaction',
      description: 'Dedicated 24/7 priority support desks and guaranteed SLA turnaround times for every partner.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">About Metro Transit Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built on Discipline, Precision & <span className="text-[#D61F26]">Uncompromising Trust.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Metro Transit Logistics (Vertex Group) was founded to redefine pan-African logistics. We bridge businesses and communities with high-density urban courier networks, automated sorting nodes, and customer-first service standards.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillarItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#121212] border border-zinc-800/90 rounded-2xl hover:border-[#D61F26]/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl flex items-center justify-center text-[#D61F26] mb-5 group-hover:bg-[#D61F26] group-hover:text-white transition-all">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Mission, Vision & Values Box */}
        <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-center gap-3 pb-8 border-b border-zinc-800">
            <button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'mission'
                  ? 'bg-[#D61F26] text-white shadow-lg shadow-[#D61F26]/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Our Mission</span>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'vision'
                  ? 'bg-[#D61F26] text-white shadow-lg shadow-[#D61F26]/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Our Vision</span>
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'values'
                  ? 'bg-[#D61F26] text-white shadow-lg shadow-[#D61F26]/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Core Values</span>
            </button>
          </div>

          <div className="pt-8">
            {activeTab === 'mission' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">To Empower Businesses Through Rapid, Safe & Predictable Fulfillment.</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Our mission is to eliminate supply chain friction for SMEs and corporations across Africa. We achieve this by deploying disciplined couriers, climate-controlled fleets, and transparent digital tools that treat every parcel with critical care.
                  </p>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2">
                    <CheckCircle className="w-4 h-4 text-[#D61F26]" />
                    <span>Guaranteed 20-minute rider dispatch in commercial centers.</span>
                  </div>
                </div>
                <div className="md:col-span-4 bg-zinc-900/80 p-5 rounded-xl border border-zinc-800 text-center">
                  <span className="text-3xl font-black text-[#D61F26] block">100%</span>
                  <span className="text-xs text-zinc-300 font-semibold uppercase block mt-1">Verified Chain of Custody</span>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">To Become Africa's Benchmark Corporate Logistics Network.</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    We envision a seamlessly connected continent where businesses of any scale can move cargo, food, and high-value documents intraday with zero friction, backed by clean electric fleets and AI route coordination.
                  </p>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2">
                    <CheckCircle className="w-4 h-4 text-[#D61F26]" />
                    <span>Expanding to 100+ urban hubs by 2028.</span>
                  </div>
                </div>
                <div className="md:col-span-4 bg-zinc-900/80 p-5 rounded-xl border border-zinc-800 text-center">
                  <span className="text-3xl font-black text-white block">48+</span>
                  <span className="text-xs text-zinc-300 font-semibold uppercase block mt-1">Active Metros Connected</span>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 space-y-2">
                  <span className="text-sm font-bold text-[#D61F26] block">1. Integrity First</span>
                  <p className="text-xs text-zinc-400">Zero tolerance for parcel tampering or unvetted handoffs.</p>
                </div>
                <div className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 space-y-2">
                  <span className="text-sm font-bold text-[#D61F26] block">2. Precision Speed</span>
                  <p className="text-xs text-zinc-400">Punctuality measured in minutes, backed by real-time GPS monitors.</p>
                </div>
                <div className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 space-y-2">
                  <span className="text-sm font-bold text-[#D61F26] block">3. Customer Empathy</span>
                  <p className="text-xs text-zinc-400">24/7 human support leads ready to resolve logistics hurdles instantly.</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
