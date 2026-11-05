import { assetUrl } from '../utils/assets';
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Compass, ShieldCheck, MapPin, Star, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import SearchPanel from './SearchPanel';

export default function HeroSection({ onSearch }) {
  const handleHeroWhatsApp = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours, I saw your website and would like to plan a private car tour to Ooty. Please share package options and quotes."
    );
  };

  return (
    <div className="relative bg-forest-900 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Hero Image with Dark Forest Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl("/images/ooty3.png")}
          alt="Ooty Nilgiri Tea Plantations and Valley"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
        />
        {/* MakeMyTrip-style luxury dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/75 to-forest-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-accent-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>The Nilgiris Premier Private Car Sightseeing Service</span>
        </div>

        {/* Destination-focused main heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto font-display text-shadow-md">
          Discover the Beauty of <span className="text-accent underline decoration-accent/40 decoration-wavy decoration-2">Ooty</span> with Hasna Tours
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal text-shadow-sm">
          Explore breathtaking hill stations, beautiful landscapes and unforgettable destinations with comfortable private car tours and customized travel packages.
        </p>

        {/* Two CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/tour-packages"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-hover hover:to-accent text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display uppercase tracking-wider"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Tour Packages</span>
          </Link>

          <button
            onClick={handleHeroWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Book Your Trip on WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>100% Private Chauffeur</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span>4.9/5 Nilgiri Traveler Rating</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Custom Pickup from Ooty & Coimbatore</span>
          </div>
        </div>

        {/* Floating Travel Search Panel */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <SearchPanel onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

