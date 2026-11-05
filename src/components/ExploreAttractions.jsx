import React from 'react';
import { Compass, Clock, MapPin } from 'lucide-react';
import { OOTY_ATTRACTIONS } from '../data/attractionsData';

export default function ExploreAttractions() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-accent" />
            <span>Iconic Sights & Hidden Gems</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
            Explore Ooty Sightseeing Attractions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Visit the most beloved landmarks of the Queen of Hill Stations. Every spot is covered seamlessly with our private car tours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OOTY_ATTRACTIONS.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-forest-900 font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-xs">
                    {attraction.tag}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] text-accent-light font-medium block">
                      {attraction.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display leading-tight drop-shadow-sm">
                      {attraction.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {attraction.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-nature" />
                  <span>{attraction.timing}</span>
                </span>
                <span className="text-nature font-semibold">Private Car Access</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

