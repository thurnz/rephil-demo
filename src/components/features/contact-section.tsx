"use client";

import React, { useState } from "react";
import { CONTACT_CONTENT } from "@/data/contact";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const {
    headline,
    subheadline,
    officeAddress,
    phone,
    email,
    mapEmbedUrl,
    socialLinks,
  } = CONTACT_CONTENT;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface text-white overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-left max-w-2xl">
          <span className="text-brand-sun font-bold text-xs uppercase tracking-widest font-heading">
            Reach Out
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1.5">
            {headline}
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base font-sans">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] gap-4">
              {/* Phone Card */}
              <a
                href={phone.href}
                className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-brand-sun hover:bg-white/10 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-white/60 font-semibold uppercase">
                    Call Us
                  </div>
                  <div className="font-heading font-bold text-base text-white group-hover:text-brand-sun transition-colors">
                    {phone.label}
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={email.href}
                className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-brand-sun hover:bg-white/10 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy border border-white/10 flex items-center justify-center text-brand-sun shrink-0 shadow-md">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-white/60 font-semibold uppercase">
                    Email Us
                  </div>
                  <div className="font-heading font-bold text-base text-white group-hover:text-brand-sun transition-colors truncate">
                    {email.label}
                  </div>
                </div>
              </a>
            </div>

            {/* Address Card */}
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-sun shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-white/60 font-semibold uppercase">
                  {officeAddress.title}
                </div>
                <div className="text-sm text-white/90 font-sans mt-0.5 leading-relaxed">
                  {officeAddress.address}
                </div>
              </div>
            </div>

            {/* Head Office Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl h-64 sm:h-72 w-full relative">
              <iframe
                src={mapEmbedUrl}
                title="Rephil Station Incorporated Head Office Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-125"
              />
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                Follow Us:
              </span>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-heading font-semibold text-white transition-colors"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 rounded-3xl bg-ink/80 border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-white/70 text-xs sm:text-sm font-sans mb-6">
              Have a question about our fuel, stations, or fleet services? Fill
              out the form below.
            </p>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
                <h4 className="font-heading font-bold text-xl text-white">
                  Thank you!
                </h4>
                <p className="text-sm text-white/80 max-w-sm">
                  Your message has been received. Our team will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Juan Dela Cruz"
                    className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-sun focus:ring-1 focus:ring-brand-sun transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="juan@example.com"
                      className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-sun focus:ring-1 focus:ring-brand-sun transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="0917 123 4567"
                      className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-sun focus:ring-1 focus:ring-brand-sun transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1"
                  >
                    Inquiry Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Station Locator, Bulk Fuel, Fleet Account"
                    className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-sun focus:ring-1 focus:ring-brand-sun transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-sun focus:ring-1 focus:ring-brand-sun transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-sun text-brand-navy font-heading font-bold text-sm sm:text-base py-3.5 hover:bg-yellow-300 transition-colors shadow-lg shadow-black/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
