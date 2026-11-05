import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Car, Check, Star, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { openWhatsApp, buildPackageBookingMessage } from '../utils/whatsapp';

export default function PackageCard({ pkg, onEnquire }) {
  const handleDirectWhatsApp = (e) => {
    e.stopPropagation();
    if (onEnquire) {
      onEnquire(pkg);
    } else {
      const message = buildPackageBookingMessage({
        packageName: pkg.title,
        destination: pkg.destination,
        tourType: pkg.tourType,
        travelDate: 'Upcoming Trip',
        travellers: '2-4 Guests',
        pickupLocation: pkg.pickupLocations?.[0] || 'Ooty',
        vehiclePreference: pkg.vehicleOptions?.[0] || 'Toyota Innova Crysta',
      });
      openWhatsApp(message);
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Image area */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        {pkg.badge && (
          <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {pkg.badge}
          </div>
        )}

        {/* Duration pill */}
        <div className="absolute top-4 right-4 bg-forest-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span>{pkg.duration}</span>
        </div>

        {/* Title & destination on bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center space-x-1 text-xs text-forest-200 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{pkg.destination}</span>
            <span>•</span>
            <span>{pkg.tourType}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-display leading-snug drop-shadow-md">
            {pkg.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Rating and review count */}
        <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-1.5">
            <span className="flex items-center space-x-1 bg-forest-50 text-forest-800 px-2 py-0.5 rounded-md font-bold">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <span>{pkg.rating || 4.9}</span>
            </span>
            <span className="text-slate-400">({pkg.reviewCount || 150}+ verified tours)</span>
          </div>

          <div className="flex items-center space-x-1 text-nature font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Private Car</span>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {pkg.shortDescription}
        </p>

        {/* Sightseeing Highlights Chips */}
        <div>
          <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            Key Sightseeing Spots
          </span>
          <div className="flex flex-wrap gap-1.5">
            {pkg.sightseeingHighlights.slice(0, 4).map((spot, i) => (
              <span
                key={i}
                className="text-[11px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/70 font-medium flex items-center space-x-1"
              >
                <Check className="w-3 h-3 text-nature shrink-0" />
                <span className="truncate max-w-[170px]">{spot}</span>
              </span>
            ))}
            {pkg.sightseeingHighlights.length > 4 && (
              <span className="text-[11px] bg-slate-100 text-slate-500 px-2 py-1 rounded-lg font-medium">
                +{pkg.sightseeingHighlights.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Vehicle Information */}
        {pkg.vehicleOptions && pkg.vehicleOptions.length > 0 && (
          <div className="flex items-center space-x-2 text-xs text-slate-600 bg-forest-50/60 p-2.5 rounded-xl border border-forest-100/60">
            <Car className="w-4 h-4 text-forest-700 shrink-0" />
            <span className="font-medium text-forest-900 truncate">
              Cars: {pkg.vehicleOptions.slice(0, 2).join(', ')}
              {pkg.vehicleOptions.length > 2 ? ' & more' : ''}
            </span>
          </div>
        )}

        {/* Price status & Actions */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Customized Quote
              </span>
              <span className="text-xs sm:text-sm font-bold text-forest-800">
                Transparent All-Inclusive
              </span>
            </div>

            <span className="text-[11px] bg-nature/10 text-nature font-bold px-2.5 py-1 rounded-full">
              No Hidden Charges
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/tour-packages/${pkg.slug}`}
              className="flex items-center justify-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200 text-forest-800 hover:bg-forest-50 hover:border-forest-200 font-bold text-xs transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleDirectWhatsApp}
              className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

