import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Car, Navigation, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { TOUR_TYPES } from '../data/tourTypesData';

export default function SearchPanel({ onSearch, defaultValues = {} }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState(defaultValues.destination || 'All Destinations');
  const [travelDate, setTravelDate] = useState(defaultValues.travelDate || '');
  const [travellers, setTravellers] = useState(defaultValues.travellers || '2 Adults');
  const [tourType, setTourType] = useState(defaultValues.tourType || 'All Tour Types');
  const [pickupLocation, setPickupLocation] = useState(defaultValues.pickupLocation || 'Ooty');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      destination: destination === 'All Destinations' ? '' : destination,
      travelDate,
      travellers,
      tourType: tourType === 'All Tour Types' ? '' : tourType,
      pickupLocation,
    };

    if (onSearch) {
      onSearch(searchParams);
    } else {
      const q = new URLSearchParams();
      if (searchParams.destination) q.set('destination', searchParams.destination);
      if (searchParams.tourType) q.set('type', searchParams.tourType);
      if (searchParams.pickupLocation) q.set('pickup', searchParams.pickupLocation);
      navigate(`/tour-packages?${q.toString()}`);
    }
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl shadow-forest-950/40 p-4 sm:p-6 border border-white/60 text-left">
      {/* MakeMyTrip-style quick category discovery chips */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-4 text-xs border-b border-slate-100">
        <span className="text-slate-400 font-semibold shrink-0 flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Quick Picks:</span>
        </span>
        <button
          type="button"
          onClick={() => { setDestination('Ooty'); setTourType('Private Car Sightseeing'); }}
          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
            destination === 'Ooty' ? 'bg-forest-900 text-white shadow-xs' : 'bg-slate-100 hover:bg-forest-50 text-slate-700'
          }`}
        >
          🌿 Ooty 1-Day Tour
        </button>
        <button
          type="button"
          onClick={() => { setDestination('Coonoor'); setTourType('Family Tour Packages'); }}
          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
            destination === 'Coonoor' ? 'bg-forest-900 text-white shadow-xs' : 'bg-slate-100 hover:bg-forest-50 text-slate-700'
          }`}
        >
          ☕ Coonoor Tea Estates
        </button>
        <button
          type="button"
          onClick={() => { setTourType('Honeymoon Packages'); }}
          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
            tourType === 'Honeymoon Packages' ? 'bg-forest-900 text-white shadow-xs' : 'bg-slate-100 hover:bg-forest-50 text-slate-700'
          }`}
        >
          💑 Honeymoon Specials
        </button>
        <button
          type="button"
          onClick={() => { setDestination('Kodaikanal'); setTourType('All Tour Types'); }}
          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
            destination === 'Kodaikanal' ? 'bg-forest-900 text-white shadow-xs' : 'bg-slate-100 hover:bg-forest-50 text-slate-700'
          }`}
        >
          🌲 Kodaikanal
        </button>
        <button
          type="button"
          onClick={() => { setDestination('All Destinations'); setTourType('All Tour Types'); }}
          className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-amber-50 text-accent-dark hover:bg-amber-100 transition-all cursor-pointer border border-amber-200/60"
        >
          ✨ View All
        </button>
      </div>

      <form onSubmit={handleSearchSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Destination */}
          <div className="bg-slate-50/90 hover:bg-forest-50/60 transition-colors p-3 rounded-2xl border border-slate-200/90 text-left">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-nature" />
              <span>Destination</span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent font-semibold text-slate-800 text-sm focus:outline-none cursor-pointer"
            >
              <option value="All Destinations">All Destinations</option>
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date */}
          <div className="bg-slate-50/90 hover:bg-forest-50/60 transition-colors p-3 rounded-2xl border border-slate-200/90 text-left">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-nature" />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-transparent font-semibold text-slate-800 text-sm focus:outline-none"
            />
          </div>

          {/* Number of Travellers */}
          <div className="bg-slate-50/90 hover:bg-forest-50/60 transition-colors p-3 rounded-2xl border border-slate-200/90 text-left">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
              <Users className="w-3.5 h-3.5 text-nature" />
              <span>Travellers</span>
            </label>
            <select
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full bg-transparent font-semibold text-slate-800 text-sm focus:outline-none cursor-pointer"
            >
              <option value="2 Adults (Couple)">2 Adults (Couple)</option>
              <option value="2 Adults + 1 Kid">2 Adults + 1 Kid</option>
              <option value="3-4 Adults (Family)">3-4 Adults (Family)</option>
              <option value="5-7 Adults (SUV)">5-7 Adults (SUV)</option>
              <option value="8+ Adults (Group)">8+ Adults (Group)</option>
            </select>
          </div>

          {/* Tour Type */}
          <div className="bg-slate-50/90 hover:bg-forest-50/60 transition-colors p-3 rounded-2xl border border-slate-200/90 text-left">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
              <Car className="w-3.5 h-3.5 text-nature" />
              <span>Tour Type</span>
            </label>
            <select
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
              className="w-full bg-transparent font-semibold text-slate-800 text-sm focus:outline-none cursor-pointer"
            >
              <option value="All Tour Types">All Tour Types</option>
              {TOUR_TYPES.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pickup Location */}
          <div className="bg-slate-50/90 hover:bg-forest-50/60 transition-colors p-3 rounded-2xl border border-slate-200/90 text-left">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
              <Navigation className="w-3.5 h-3.5 text-nature" />
              <span>Pickup City</span>
            </label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full bg-transparent font-semibold text-slate-800 text-sm focus:outline-none cursor-pointer"
            >
              <option value="Ooty">Ooty Town / Resort</option>
              <option value="Coimbatore Airport (CJB)">Coimbatore Airport (CJB)</option>
              <option value="Coimbatore Railway Station">Coimbatore Railway Station</option>
              <option value="Mettupalayam Station">Mettupalayam Station</option>
              <option value="Mysore">Mysore</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Kodaikanal">Kodaikanal</option>
            </select>
          </div>
        </div>

        {/* Submit action button */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="text-xs text-slate-500 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-nature inline-block animate-pulse"></span>
            <span>All packages include private sanitized car, verified driver & full sightseeing</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-hover hover:to-accent text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider font-display"
          >
            <Search className="w-4 h-4" />
            <span>Search Packages</span>
          </button>
        </div>
      </form>
    </div>
  );
}

