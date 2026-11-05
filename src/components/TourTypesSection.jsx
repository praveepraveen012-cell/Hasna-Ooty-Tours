import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { TOUR_TYPES } from '../data/tourTypesData';

export default function TourTypesSection() {
  const navigate = useNavigate();

  const handleSelectType = (typeName) => {
    navigate(`/tour-packages?type=${encodeURIComponent(typeName)}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-surface-light border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-accent" />
            <span>Tailored for Every Traveler</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
            Explore by Tour Type
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Whether traveling with family, planning a romantic honeymoon getaway, or organizing a lively group trip, find the ideal tour designed for your journey.
          </p>
        </div>

        {/* Dynamic Grid of Image-based Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOUR_TYPES.map((type, idx) => (
            <div
              key={type.id}
              onClick={() => handleSelectType(type.name)}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-forest-900">
                  Private Car Included
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight drop-shadow-md">
                    {type.name}
                  </h3>
                  <p className="text-xs text-accent-light font-medium mt-0.5">
                    {type.tagline}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {type.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-nature group-hover:text-accent transition-colors">
                  <span>Explore {type.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

