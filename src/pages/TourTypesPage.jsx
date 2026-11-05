import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Users, Heart, ShieldCheck, Sparkles, ArrowRight, Check } from 'lucide-react';
import { TOUR_TYPES } from '../data/tourTypesData';
import { openWhatsApp } from '../utils/whatsapp';

export default function TourTypesPage() {
  const handleConsultWhatsApp = (typeName) => {
    openWhatsApp(
      `Hello Hasna Ooty Tours, I am interested in your ${typeName}. Please guide me with package itineraries, private car options, and best rates.`
    );
  };

  return (
    <div className="bg-surface-light min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-accent" />
            <span>Tailor-Made Holiday Categories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-forest-900 font-display">
            Tour Types & Categories
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every traveler has a distinct dream holiday. Whether it is an intimate honeymoon with misty mountain views, a fun-filled family retreat, or an exciting group road trip, we have the ideal private car package for you.
          </p>
        </div>

        {/* Tour Type Cards List */}
        <div className="space-y-10 sm:space-y-12">
          {TOUR_TYPES.map((type, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={type.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-accent-light block mb-1">
                      {type.tagline}
                    </span>
                    <h3 className="text-2xl font-bold font-display drop-shadow-md">
                      {type.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-10 space-y-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-nature bg-forest-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      Private Chauffeur Included
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 font-display mt-2">
                      {type.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent-dark font-medium mt-1">
                      {type.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {type.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {type.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-nature shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/tour-packages?type=${encodeURIComponent(type.name)}`}
                      className="inline-flex items-center space-x-1.5 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs px-5 py-3 rounded-full transition-all shadow-sm font-display"
                    >
                      <span>Explore {type.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => handleConsultWhatsApp(type.name)}
                      className="inline-flex items-center space-x-1.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-xs px-5 py-3 rounded-full transition-all shadow-sm cursor-pointer"
                    >
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

