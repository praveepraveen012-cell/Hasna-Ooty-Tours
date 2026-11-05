import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Car, Navigation } from 'lucide-react';
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
    <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-search p-4 sm:p-6 border border-slate-100">
      <form onSubmit={handleSearchSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Destination */}
          <div className="bg-slate-50/80 hover:bg-forest-50/50 transition-colors p-3 rounded-2xl border border-slate-200/80 text-left">
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
          <div className="bg-slate-50/80 hover:bg-forest-50/50 transition-colors p-3 rounded-2xl border border-slate-200/80 text-left">
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
          <div className="bg-slate-50/80 hover:bg-forest-50/50 transition-colors p-3 rounded-2xl border border-slate-200/80 text-left">
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
          <div className="bg-slate-50/80 hover:bg-forest-50/50 transition-colors p-3 rounded-2xl border border-slate-200/80 text-left">
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
          <div className="bg-slate-50/80 hover:bg-forest-50/50 transition-colors p-3 rounded-2xl border border-slate-200/80 text-left">
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

