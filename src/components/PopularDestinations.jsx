import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';

export default function PopularDestinations() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleDestinationClick = (destName) => {
    navigate(`/tour-packages?destination=${encodeURIComponent(destName)}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-nature text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>South India Hill Stations & Royal Cities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
              Popular Destinations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Choose from the most stunning and serene destinations across the Western Ghats and Nilgiris. Travel in comfort with dedicated private cars.
            </p>
          </div>

          <div className="hidden sm:flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-forest-50 hover:text-forest-700 flex items-center justify-center shadow-xs transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-forest-50 hover:text-forest-700 flex items-center justify-center shadow-xs transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto pb-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleDestinationClick(dest.name)}
              className="flex-none w-[280px] sm:w-[320px] lg:w-[340px] group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer snap-start flex flex-col justify-between"
            >
              {/* Image with overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-forest-900 shadow-sm">
                  {dest.popularDuration}
                </div>

                {/* Distance Badge */}
                <div className="absolute top-4 right-4 bg-forest-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-accent-light">
                  {dest.distanceFromOoty}
                </div>

                {/* Destination Name at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-display drop-shadow-md">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 drop-shadow-sm">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {dest.shortDescription}
                </p>

                {/* Sightseeing highlights tags */}
                <div className="flex flex-wrap gap-1.5">
                  {dest.sightseeingHighlights.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-forest-50 text-nature px-2.5 py-0.5 rounded-md font-medium"
                    >
                      {item}
                    </span>
                  ))}
                  {dest.sightseeingHighlights.length > 3 && (
                    <span className="text-[11px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-medium">
                      +{dest.sightseeingHighlights.length - 3} more
                    </span>
                  )}
                </div>

                {/* Card CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-forest-700">
                    {dest.packageCount} Tour Packages
                  </span>
                  <span className="inline-flex items-center space-x-1 text-xs font-bold text-nature group-hover:text-accent transition-colors">
                    <span>Explore Packages</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

