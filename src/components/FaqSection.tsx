import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#131313] relative border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#D61F26]" />
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Got Questions? <span className="text-[#D61F26]">We Have Answers.</span>
          </h2>
          <p className="text-sm text-zinc-400">
            Everything you need to know about booking, tracking, cold chain storage, and business partnerships.
          </p>
        </div>

        {/* Search input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search questions (e.g. costs, insurance, business accounts)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121212] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D61F26] transition-colors"
          />
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#121212] border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/60 transition-colors"
                  >
                    <span className="text-base font-bold text-white pr-2">{faq.question}</span>
                    <div className={`p-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 transition-transform ${isOpen ? 'rotate-180 bg-[#D61F26] text-white border-[#D61F26]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/80 leading-relaxed bg-zinc-900/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-zinc-500 text-sm">
              No matching questions found. Try searching for "costs" or "tracking".
            </div>
          )}
        </div>

        {/* Ask support banner */}
        <div className="mt-12 p-6 bg-[#121212] border border-zinc-800 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl text-[#D61F26]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question not answered here?</h4>
              <p className="text-xs text-zinc-400">Our customer team is available 24/7 on live chat and phone.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-zinc-800 hover:bg-[#D61F26] text-white text-xs font-bold rounded-xl transition-colors whitespace-nowrap"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
};
