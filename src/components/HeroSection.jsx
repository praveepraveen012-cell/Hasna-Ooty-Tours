import { assetUrl } from '../utils/assets.js';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, ShieldCheck, MapPin, Phone, ArrowRight, Clock, Award
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';
import SearchPanel from './SearchPanel';
import OfficialWhatsAppIcon from './OfficialWhatsAppIcon';

export default function HeroSection({ onSearch }) {
  const handleHeroWhatsApp = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours, I saw your website and would like to plan a private car tour to Ooty. Please share package options, itinerary details and the best price."
    );
  };

  return (
    <div className="relative bg-black pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Hero Image with Vivid Nilgiri Lake & Tea Hill Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl("/images/hasna-emerald-ooty-banner.jpg?v=emerald")}
          alt="Panoramic view of Ooty Emerald Lake and tea gardens - Hasna Ooty Tours"
          className="w-full h-full object-cover object-[center_40%] lg:object-[center_35%]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Balanced Black Overlay: Preserves full visibility of the scenic landscape while ensuring 100% text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-md border border-white/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-white">Private Car Sightseeing in Ooty & The Nilgiris</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="text-amber-300 hidden sm:inline">24/7 Travel Desk</span>
        </div>

        {/* Destination-focused main heading in Montserrat */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] max-w-4xl mx-auto font-heading drop-shadow-md">
          Discover the Beauty of <span className="text-amber-400">Ooty</span> with Hasna Tours
        </h1>

        {/* Description in Segoe UI */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Explore breathtaking hill stations, misty tea plantations, cascading waterfalls, and scenic viewpoints with comfortable private car tours customized for you and your family.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            to="/tour-packages"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer font-heading"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <button
            onClick={handleHeroWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
          >
            <OfficialWhatsAppIcon className="w-5 h-5 text-white" />
            <span>Book Your Trip on WhatsApp</span>
          </button>

          <a
            href={`tel:${SITE_CONFIG.phoneCall}`}
            className="hidden xl:inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-sm border border-white/25 transition-colors shadow-sm"
            title="Call Hasna Ooty Tours Direct"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
        </div>

        {/* Authentic Factual Service Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-100 font-medium">
          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Dedicated Private Vehicles</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Experienced Local Mountain Drivers</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Doorstep Pickup: Ooty & Coimbatore</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
            <Clock className="w-4 h-4 text-emerald-300" />
            <span>Pay Direct to Driver • Transparent Quotes</span>
          </div>
        </div>

        {/* Search Panel */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <SearchPanel onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

