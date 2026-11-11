import { assetUrl } from '../utils/assets.js';
import React from 'react';
import { MessageCircle, Phone, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

export default function FinalCtaBanner() {
  const handleCtaClick = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours! I am planning my dream Ooty trip. Please share package availability, itinerary options, and best price for a private car tour."
    );
  };

  return (
    <section className="relative py-24 bg-forest-950 text-white overflow-hidden">
      {/* Background Image with Rich Nilgiri Lake & Tea Garden Scenery */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl("/images/hasna-emerald-ooty-banner.jpg?v=emerald")}
          alt="Breathtaking Panoramic View of Ooty Nilgiri Tea Gardens & Lake - Hasna Ooty Tours"
          className="w-full h-full object-cover object-[center_40%] scale-105 transform motion-safe:animate-subtle-zoom"
          loading="lazy"
        />
        {/* Soft Hill Station Vignette */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.10) 0%, transparent 70%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/92 via-forest-950/80 to-forest-950/92" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-accent mb-6 border border-white/20 shadow-lg">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Instant WhatsApp Quotations • 24/7 Travel Desk</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          Your Dream Ooty Trip Starts Here!
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
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
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-full backdrop-blur-sm border border-white/30 transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call Us: {SITE_CONFIG.phone}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>No upfront payment on website</span>
          </span>
          <span>•</span>
          <span>Direct confirmation with local Ooty team</span>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Trusted by 500+ happy travelers</span>
          </span>
        </div>
      </div>
    </section>
  );
}

