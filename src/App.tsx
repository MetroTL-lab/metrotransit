import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { BusinessPartnerships } from './components/BusinessPartnerships';
import { CompanyStats } from './components/CompanyStats';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DownloadAppSection } from './components/DownloadAppSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';

import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#131313] text-zinc-100 selection:bg-[#D61F26] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Metro Transit Logistics */}
        <About />

        {/* 3. Our Services */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Business Partnerships (SME Focus) */}
        <BusinessPartnerships />

        {/* 7. Company Statistics */}
        <CompanyStats />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Mobile App Download & Get Started Section */}
        <DownloadAppSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection
          onOpenContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Informational Service Details Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
      />

      {/* Legal Documentation Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

