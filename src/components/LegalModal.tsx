import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-zinc-800 rounded-2xl shadow-2xl text-zinc-100 overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-[#161616]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl text-[#D61F26]">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {isPrivacy ? 'Privacy Policy & Data Governance' : 'Terms & Conditions of Carriage'}
              </h2>
              <p className="text-xs text-zinc-400">Metro Transit Logistics Corporate Compliance Document</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Text Body */}
        <div className="p-6 space-y-4 text-xs text-zinc-300 max-h-[60vh] overflow-y-auto leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-zinc-200">Effective Date: January 1, 2026</p>
              <p>
                Metro Transit Logistics ("Company", "we", "our") values the trust of our corporate partners, riders, and individual shippers. This Privacy Policy details how we handle location telemetry, contact records, and parcel manifest metadata.
              </p>
              
              <h4 className="text-sm font-bold text-white pt-2">1. GPS Location Telemetry</h4>
              <p>
                To provide live package tracking and rider dispatch optimization, real-time GPS coordinates are logged during active transit cycles only. Location records are encrypted using AES-256 standards.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">2. Corporate & SME Data Protection</h4>
              <p>
                Business API credentials, order volumes, and customer address manifests provided through our SME partner portal are never shared with third parties or used for external advertising.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">3. OTP & Digital Verification</h4>
              <p>
                Digital signatures and one-time password (OTP) verification records are maintained for 90 days following successful delivery to resolve potential claims or proof-of-delivery audits.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-zinc-200">Effective Date: January 1, 2026</p>
              <p>
                By tendering goods or booking courier services with Metro Transit Logistics, the customer agrees to the standard Terms and Conditions of Carriage set forth below.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">1. Included Liability & Insurance</h4>
              <p>
                Unless declared value protection is purchased prior to dispatch, standard courier shipments are covered up to a maximum declared value of ₦1,000,000 per consignment.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">2. Prohibited Consignments</h4>
              <p>
                Metro Transit Logistics strict safety policies prohibit hazardous chemicals, illegal narcotics, unlicensed firearms, and currency in transit. All packages undergo security scanning at central sorting hubs.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">3. SLA & Delivery Timelines</h4>
              <p>
                While Express Same-Day and Scheduled routes are backed by our 99.4% on-time SLA, delays caused by force majeure, severe weather disruptions, or government-mandated curfew zones are exempt from immediate refund penalties.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-[#161616] border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#D61F26] hover:bg-[#b8181e] text-white font-semibold text-xs rounded-xl"
          >
            I Understand & Accept
          </button>
        </div>

      </div>
    </div>
  );
};
