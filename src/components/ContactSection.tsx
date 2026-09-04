import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Loader2
} from 'lucide-react';
import { ContactFormState } from '../types';
import { InteractiveMap } from './InteractiveMap';

type HubKey = 'lagos' | 'nairobi' | 'accra' | 'joburg';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [selectedHub, setSelectedHub] = useState<HubKey>('lagos');

  const [formState, setFormState] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'General Inquiry',
    message: '',
  });

  const hubs = {
    lagos: {
      name: 'Lagos Corporate HQ',
      address:
        'Metro Transit Tower, Plot 14 Victoria Island Commercial Zone, Lagos, Nigeria',
      phone: '+234 803 168 5334',
      email: 'contact@metrotransit.com.ng',
      hours: 'Mon - Sun: 24/7 Operations',
      coords: '6.4281° N, 3.4219° E',
    },
    nairobi: {
      name: 'Nairobi Regional Hub',
      address:
        'Westlands Commercial Center, Waiyaki Way, Nairobi, Kenya',
      phone: '+254 700 889 001',
      email: 'nairobi@metrotransitlogistics.com',
      hours: 'Mon - Sun: 24/7 Operations',
      coords: '1.2675° S, 36.8040° E',
    },
    accra: {
      name: 'Accra Logistics Hub',
      address:
        'Airport Residential Area, Liberation Road, Accra, Ghana',
      phone: '+233 302 990 123',
      email: 'accra@metrotransitlogistics.com',
      hours: 'Mon - Sun: 24/7 Operations',
      coords: '5.6037° N, 0.1870° W',
    },
    joburg: {
      name: 'Johannesburg Gateway',
      address:
        'Sandton City Office Tower, 5th Street, Johannesburg, South Africa',
      phone: '+27 11 880 4492',
      email: 'joburg@metrotransitlogistics.com',
      hours: 'Mon - Sun: 24/7 Operations',
      coords: '26.1076° S, 28.0567° E',
    },
  };

  const currentHub = hubs[selectedHub];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(
        'https://formspree.io/f/mjyvwkjj',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formState),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        setFormState({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: 'General Inquiry',
          subject: '',
          message: '',
        });
      } else {
        const data = await response.json();

        setErrorMessage(
          data?.error ||
            'Something went wrong. Please try again.'
        );
      }
    } catch (error) {
      console.error('Contact form submission error:', error);

      setErrorMessage(
        'Network error. Check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#131313] relative border-t border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-full">
            <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Metro Transit{' '}
            <span className="text-[#D61F26]">Logistics.</span>
          </h2>

          <p className="text-sm text-zinc-400">
            Reach out for custom corporate freight arrangements, SME
            partnership inquiries, or package support.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Phone */}
          <div className="p-6 bg-[#121212] border border-zinc-800 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl text-[#D61F26]">
              <Phone className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs text-zinc-400 font-bold uppercase block">
                Phone / Dispatch Hotlines
              </span>

              <a
                href={`tel:${currentHub.phone}`}
                className="text-sm font-bold text-white hover:text-[#D61F26] transition-colors mt-0.5 block"
              >
                {currentHub.phone}
              </a>

              <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                24/7 Dispatch Desk Available
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 bg-[#121212] border border-zinc-800 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl text-[#D61F26]">
              <Mail className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs text-zinc-400 font-bold uppercase block">
                Email Enquiries
              </span>

              <a
                href={`mailto:${currentHub.email}`}
                className="text-sm font-bold text-white hover:text-[#D61F26] transition-colors mt-0.5 block"
              >
                {currentHub.email}
              </a>

              <span className="text-[11px] text-zinc-400 block mt-1">
                Response within 30 minutes guaranteed
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="p-6 bg-[#121212] border border-zinc-800 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-[#D61F26]/10 border border-[#D61F26]/30 rounded-xl text-[#D61F26]">
              <MapPin className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs text-zinc-400 font-bold uppercase block">
                Corporate Headquarters
              </span>

              <p className="text-xs font-semibold text-white mt-0.5 leading-snug">
                {currentHub.address}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-zinc-800 rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">
                Send Us a Direct Message
              </h3>

              <p className="text-xs text-zinc-400 mt-1">
                Fill in the details below and our operations team will
                respond promptly.
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                {errorMessage}
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5"
                    >
                      Your Full Name *
                    </label>

                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      required
                      disabled={loading}
                      placeholder="e.g. Samuel Adewale"
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full bg-[#181818] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D61F26] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={loading}
                      placeholder="samuel@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-[#181818] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D61F26] disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Phone + Inquiry Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5"
                    >
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      disabled={loading}
                      placeholder="+234 800 000 0000"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-[#181818] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D61F26] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-inquiry-type"
                      className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5"
                    >
                      Inquiry Type
                    </label>

                    <select
                      id="contact-inquiry-type"
                      name="inquiryType"
                      disabled={loading}
                      value={formState.inquiryType}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          inquiryType:
                            e.target
                              .value as ContactFormState['inquiryType'],
                        })
                      }
                      className="w-full bg-[#181818] border border-zinc-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D61F26] disabled:opacity-50"
                    >
                      <option value="General Inquiry">
                        General Inquiry
                      </option>

                      <option value="Enterprise Partnership">
                        Enterprise Partnership
                      </option>

                      <option value="Shipment Issue">
                        Shipment Issue & Support
                      </option>

                      <option value="Billing & Quotes">
                        Billing & Bulk Quotes
                      </option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    disabled={loading}
                    placeholder="Brief description of your request"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        subject: e.target.value,
                      })
                    }
                    className="w-full bg-[#181818] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D61F26] disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    disabled={loading}
                    placeholder="Type your message here..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-[#181818] border border-zinc-700/80 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-[#D61F26] disabled:opacity-50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#D61F26] hover:bg-[#b8181e] disabled:bg-zinc-700 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D61F26]/20"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Message */
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-bold text-white">
                  Thank You for Contacting Us!
                </h4>

                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Your inquiry has been successfully transmitted to our
                  dispatch operations panel. Our team will contact you
                  back quickly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage('');
                  }}
                  className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Interactive Dark Map & Hub Selector */}
          <div className="lg:col-span-5 bg-[#121212] border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-5">

            <div>
              <span className="text-xs font-bold text-[#D61F26] uppercase tracking-wider block mb-1">
                Regional Dispatch Network
              </span>

              <h3 className="text-xl font-bold text-white">
                Select Metro Hub Location
              </h3>
            </div>

            {/* Hub Selector Tabs */}
            <div className="grid grid-cols-2 gap-2">

              <button
                type="button"
                onClick={() => setSelectedHub('lagos')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedHub === 'lagos'
                    ? 'bg-[#D61F26] text-white'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                Lagos HQ
              </button>

              <button
                type="button"
                onClick={() => setSelectedHub('nairobi')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedHub === 'nairobi'
                    ? 'bg-[#D61F26] text-white'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                Nairobi Hub
              </button>

              <button
                type="button"
                onClick={() => setSelectedHub('accra')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedHub === 'accra'
                    ? 'bg-[#D61F26] text-white'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                Accra Hub
              </button>

              <button
                type="button"
                onClick={() => setSelectedHub('joburg')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedHub === 'joburg'
                    ? 'bg-[#D61F26] text-white'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                Johannesburg
              </button>
            </div>

            {/* Fully Interactive Map */}
            <div className="h-72">
              <InteractiveMap
                selectedHubKey={selectedHub}
                onSelectHub={(hub) =>
                  setSelectedHub(hub as HubKey)
                }
              />
            </div>

            {/* Hub Details */}
            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-2 text-xs">

              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-500 font-semibold">
                  Operating Hours:
                </span>

                <span>{currentHub.hours}</span>
              </div>

              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-500 font-semibold">
                  Local Hotline:
                </span>

                <span className="text-[#D61F26] font-bold">
                  {currentHub.phone}
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center justify-between border-t border-zinc-800">

              <span className="text-xs text-zinc-400 font-bold uppercase">
                Follow Metro Logistics:
              </span>

              <div className="flex items-center gap-2">

                <a
                  href="#hero"
                  aria-label="LinkedIn"
                  className="p-2 bg-zinc-900 hover:bg-[#D61F26] text-zinc-300 hover:text-white rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="#hero"
                  aria-label="Twitter"
                  className="p-2 bg-zinc-900 hover:bg-[#D61F26] text-zinc-300 hover:text-white rounded-lg transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href="#hero"
                  aria-label="Facebook"
                  className="p-2 bg-zinc-900 hover:bg-[#D61F26] text-zinc-300 hover:text-white rounded-lg transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="#hero"
                  aria-label="Instagram"
                  className="p-2 bg-zinc-900 hover:bg-[#D61F26] text-zinc-300 hover:text-white rounded-lg transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};