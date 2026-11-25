import { assetUrl } from '../utils/assets.js';
import React from 'react';
import { Phone, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';
import OfficialWhatsAppIcon from './OfficialWhatsAppIcon';

export default function FinalCtaBanner() {
  const handleCtaClick = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours, I am planning a trip to Ooty. Please share package availability, itinerary options, and best price for a private car tour."
    );
  };

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Image with Rich Nilgiri Lake & Tea Garden Scenery */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl("/images/hasna-emerald-ooty-banner.jpg?v=emerald")}
          alt="Panoramic view of Ooty tea gardens and lake - Hasna Ooty Tours"
          className="w-full h-full object-cover object-[center_40%]"
          loading="lazy"
        />
        {/* Balanced Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-emerald-300 mb-6 border border-white/20 shadow-sm">
          <span>Official WhatsApp Booking • Direct Support</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight tracking-tight drop-shadow-md">
          Plan Your Ooty Holiday with Local Experts
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
          From tranquil boat rides on Ooty Lake to misty tea gardens and panoramic heights at Doddabetta. Let Hasna Ooty Tours handle the driving while you relax and enjoy the journey.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
          >
            <OfficialWhatsAppIcon className="w-5 h-5 text-white" />
            <span>Plan Your Trip on WhatsApp</span>
          </button>

          <a
            href={`tel:${SITE_CONFIG.phoneCall}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-sm border border-white/25 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call Us: {SITE_CONFIG.phone}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-200">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No upfront booking fee</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Doorstep pickup available</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-amber-300" />
            <span>Direct confirmation via WhatsApp</span>
          </span>
        </div>
      </div>
    </section>
  );
}

