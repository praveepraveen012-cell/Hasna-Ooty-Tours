import { assetUrl } from '../utils/assets.js';
import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

export default function FinalCtaBanner() {
  const handleCtaClick = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours! I am planning my dream Ooty trip. Please share package availability, itinerary options, and best price for a private car tour."
    );
  };

  return (
    <section className="relative py-20 bg-forest-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl("/images/bg.jpg")}
          alt="Scenic Ooty Mountain Background"
          className="w-full h-full object-cover object-center brightness-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/85 to-forest-900/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-accent mb-6 border border-white/20">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Instant WhatsApp Quotations • 24/7 Travel Desk</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight tracking-tight">
          Your Dream Ooty Trip Starts Here!
        </h2>

        <p className="mt-4 text-base sm:text-lg text-forest-100 max-w-2xl mx-auto leading-relaxed">
          From tranquil boat rides in Ooty Lake to misty tea gardens and panoramic heights at Doddabetta. Let Hasna Ooty Tours handle the driving while you create memories.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-elevated hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Plan Your Trip on WhatsApp</span>
          </button>

          <a
            href={`tel:${SITE_CONFIG.phoneCall}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-full backdrop-blur-sm border border-white/30 transition-all"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call Us: {SITE_CONFIG.phone}</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-forest-300">
          No upfront payment on website • Direct confirmation with local Ooty team
        </p>
      </div>
    </section>
  );
}

