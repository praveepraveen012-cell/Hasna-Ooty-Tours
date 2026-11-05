import React from 'react';
import { Users, Briefcase, Wind, ShieldCheck, MessageCircle, Check } from 'lucide-react';
import { VEHICLES } from '../data/vehiclesData';
import { openWhatsApp, buildVehicleBookingMessage } from '../utils/whatsapp';

export default function VehicleFleetSection() {
  const handleBookVehicle = (v) => {
    const message = buildVehicleBookingMessage({
      vehicleName: v.name,
      seatingCapacity: v.seatingCapacity,
      duration: 'Sightseeing / Outstation Tour',
      destination: 'Ooty & Nilgiris',
      pickupLocation: 'Ooty / Coimbatore',
    });
    openWhatsApp(message);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Clean, Sanitized & Mountain-Ready Fleet</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
            Our Private Vehicle Fleet
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Travel in supreme comfort with our well-maintained private cars and licensed local chauffeurs specialized in hill terrain and ghat roads.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLES.slice(0, 4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:border-forest-300"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-nature bg-forest-50 px-2.5 py-1 rounded-full">
                    {vehicle.category}
                  </span>
                  <span className="text-xs font-bold text-forest-900 flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Users className="w-3.5 h-3.5 text-forest-600" />
                    <span>{vehicle.seatingCapacity}</span>
                  </span>
                </div>

                {/* Car Photograph */}
                <div className="relative h-40 flex items-center justify-center p-2 mb-4 bg-gradient-to-b from-slate-50 to-white rounded-2xl overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-forest-900 font-display">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Feature bullets */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-nature shrink-0" />
                    <span className="truncate">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-nature shrink-0" />
                    <span>Air Conditioned & Clean Interiors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-nature shrink-0" />
                    <span>Verified Nilgiri Mountain Driver</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleBookVehicle(vehicle)}
                  className="w-full flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-sm hover:shadow transition-all cursor-pointer font-display"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book This Vehicle</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Tempo Traveller for large groups */}
        <div className="mt-8 bg-forest-50 border border-forest-200/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-forest-700 text-white flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-forest-900">
                Traveling with a larger group? We have 12+1 Seater Tempo Travellers!
              </h4>
              <p className="text-xs text-forest-700">
                Ideal for extended families, wedding trips, and corporate outings with pushback luxury seats.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleBookVehicle(VEHICLES[4])}
            className="shrink-0 bg-nature hover:bg-nature-dark text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors flex items-center space-x-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire Tempo Traveller</span>
          </button>
        </div>
      </div>
    </section>
  );
}

