import { assetUrl } from '../utils/assets.js';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, Compass, ShieldCheck, MapPin, Star, Sparkles,
  Phone, ArrowRight, Award, Clock
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';
import SearchPanel from './SearchPanel';

export default function HeroSection({ onSearch }) {
  const handleHeroWhatsApp = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours, I saw your website and would like to plan a private car tour to Ooty. Please share package options, itinerary details and the best price."
    );
  };

  return (
    <div className="relative bg-forest-950 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Hero Image with Vivid Sunrise Lighting & Atmospheric Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl("/images/hasna-hero-banner.jpg")}
          alt="Breathtaking Sunrise over Ooty Nilgiri Tea Hills - Hasna Ooty Tours"
          className="w-full h-full object-cover object-[center_35%] lg:object-[center_30%] scale-105 transform motion-safe:animate-subtle-zoom filter brightness-[0.94] contrast-[1.04]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Ambient Warm Golden Sunburst Glow matching the real sunrise center-left */}
        <div
          className="absolute -top-10 left-1/4 -translate-x-1/2 w-[700px] h-[550px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(245, 158, 69, 0.30) 0%, rgba(245, 158, 69, 0.10) 50%, transparent 75%)'
          }}
        />

        {/* MakeMyTrip-style luxury cinematic vignette: keeps golden sunrays & lush green hills vibrant while guaranteeing contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/40 to-forest-950/92" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-forest-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top pill badge with pulsing live indicator */}
        <div className="inline-flex items-center space-x-2.5 bg-forest-950/60 backdrop-blur-md border border-white/20 text-emerald-200 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-white font-medium">The Nilgiris Premier Private Car Sightseeing Service</span>
          <span className="text-forest-400 hidden sm:inline">•</span>
          <span className="text-accent hidden sm:inline flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            24/7 Travel Desk
          </span>
        </div>

        {/* Destination-focused main heading with elegant gradient & text shadows */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto font-display drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          Discover the Beauty of{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-200 bg-clip-text text-transparent font-extrabold">
              Ooty
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-emerald-400 rounded-full opacity-80" />
          </span>{" "}
          with Hasna Tours
        </h1>

        {/* Description */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Explore breathtaking hill stations, misty tea plantations, cascading waterfalls and unforgettable destinations with comfortable private car tours and customized travel packages.
        </p>

        {/* Primary CTAs with glowing effects */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/tour-packages"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-accent via-accent-hover to-accent-dark hover:from-accent-hover hover:to-accent text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-elevated hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display uppercase tracking-wider group"
          >
            <Compass className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={handleHeroWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-elevated hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
            <span>Book Your Trip on WhatsApp</span>
          </button>

          <a
            href={`tel:${SITE_CONFIG.phoneCall}`}
            className="hidden xl:inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-4 rounded-full backdrop-blur-md border border-white/25 transition-all shadow-md"
            title="Call Hasna Ooty Tours Direct"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
        </div>

        {/* Impressive Trust Badges with Micro-Glassmorphism */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-100 font-medium">
          <div className="flex items-center space-x-1.5 bg-forest-950/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Private Chauffeur</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-forest-950/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>4.9/5 Nilgiri Traveler Rating</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-forest-950/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Doorstep Pickup: Ooty & Coimbatore</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-forest-950/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
            <Clock className="w-4 h-4 text-emerald-300" />
            <span>Instant Quotes • No Upfront Fee</span>
          </div>
        </div>

        {/* MakeMyTrip-style Floating Travel Search Panel */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto transform transition-transform">
          <SearchPanel onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

