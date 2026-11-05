import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, MapPin, Clock, Car, Sparkles, X, Search } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';
import { DESTINATIONS } from '../data/destinationsData';
import { TOUR_TYPES } from '../data/tourTypesData';
import PackageCard from '../components/PackageCard';
import EnquiryModal from '../components/EnquiryModal';

export default function TourPackagesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters from URL or default
  const destQuery = searchParams.get('destination') || 'All';
  const typeQuery = searchParams.get('type') || 'All';
  const durationQuery = searchParams.get('duration') || 'All';
  const sortByQuery = searchParams.get('sort') || 'popular';

  const [destinationFilter, setDestinationFilter] = useState(destQuery);
  const [typeFilter, setTypeFilter] = useState(typeQuery);
  const [durationFilter, setDurationFilter] = useState(durationQuery);
  const [sortBy, setSortBy] = useState(sortByQuery);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  // Sync state if URL changes
  useEffect(() => {
    setDestinationFilter(searchParams.get('destination') || 'All');
    setTypeFilter(searchParams.get('type') || 'All');
    setDurationFilter(searchParams.get('duration') || 'All');
    setSortBy(searchParams.get('sort') || 'popular');
  }, [searchParams]);

  // Update query params when state changes
  const updateFilters = (newDest, newType, newDuration, newSort) => {
    const p = new URLSearchParams();
    if (newDest && newDest !== 'All') p.set('destination', newDest);
    if (newType && newType !== 'All') p.set('type', newType);
    if (newDuration && newDuration !== 'All') p.set('duration', newDuration);
    if (newSort && newSort !== 'popular') p.set('sort', newSort);
    setSearchParams(p);
  };

  const handleDestinationChange = (val) => {
    setDestinationFilter(val);
    updateFilters(val, typeFilter, durationFilter, sortBy);
  };

  const handleTypeChange = (val) => {
    setTypeFilter(val);
    updateFilters(destinationFilter, val, durationFilter, sortBy);
  };

  const handleDurationChange = (val) => {
    setDurationFilter(val);
    updateFilters(destinationFilter, typeFilter, val, sortBy);
  };

  const handleSortChange = (val) => {
    setSortBy(val);
    updateFilters(destinationFilter, typeFilter, durationFilter, val);
  };

  const clearAllFilters = () => {
    setDestinationFilter('All');
    setTypeFilter('All');
    setDurationFilter('All');
    setSortBy('popular');
    setSearchKeyword('');
    setSearchParams({});
  };

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Destination filter
      if (
        destinationFilter !== 'All' &&
        pkg.destination.toLowerCase() !== destinationFilter.toLowerCase()
      ) {
        return false;
      }

      // Tour Type filter
      if (
        typeFilter !== 'All' &&
        pkg.tourType.toLowerCase() !== typeFilter.toLowerCase()
      ) {
        return false;
      }

      // Duration filter
      if (durationFilter !== 'All') {
        if (durationFilter === 'Full-Day' && pkg.duration !== 'Full-Day') return false;
        if (durationFilter === 'Multi-Day' && pkg.duration === 'Full-Day') return false;
      }

      // Search keyword filter
      if (searchKeyword.trim()) {
        const q = searchKeyword.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(q);
        const matchesDest = pkg.destination.toLowerCase().includes(q);
        const matchesOverview = pkg.overview.toLowerCase().includes(q);
        const matchesSpots = pkg.sightseeingHighlights.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDest && !matchesOverview && !matchesSpots) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'duration-asc') return a.daysCount - b.daysCount;
      if (sortBy === 'duration-desc') return b.daysCount - a.daysCount;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return (b.reviewCount || 0) - (a.reviewCount || 0); // popular default
    });
  }, [destinationFilter, typeFilter, durationFilter, searchKeyword, sortBy]);

  const handleEnquire = (pkg) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };

  const activeFilterCount = (destinationFilter !== 'All' ? 1 : 0) +
    (typeFilter !== 'All' ? 1 : 0) +
    (durationFilter !== 'All' ? 1 : 0) +
    (searchKeyword ? 1 : 0);

  return (
    <div className="bg-surface-light min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-xs font-bold text-nature uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>MakeMyTrip Inspired Holiday Listings</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-forest-900 font-display">
            All Tour Packages
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl">
            Choose from authentic private car tour packages across Ooty, Coonoor, Kodaikanal, Mysore, Coorg, Wayanad, and Coimbatore. Every package includes a dedicated chauffeur, fuel, and sightseeing stops.
          </p>
        </div>

        {/* Filter and Search Control Bar (MakeMyTrip Style) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-card border border-slate-100 mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Keyword Search */}
            <div className="relative">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
                <Search className="w-3.5 h-3.5 text-nature" />
                <span>Search Spots / Keywords</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Boating, Abbey Falls, Safari..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none"
              />
            </div>

            {/* Destination Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-nature" />
                <span>Destination</span>
              </label>
              <select
                value={destinationFilter}
                onChange={(e) => handleDestinationChange(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
              >
                <option value="All">All Destinations</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Tour Type Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
                <Car className="w-3.5 h-3.5 text-nature" />
                <span>Tour Category</span>
              </label>
              <select
                value={typeFilter}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
              >
                <option value="All">All Tour Types</option>
                {TOUR_TYPES.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-nature" />
                <span>Duration</span>
              </label>
              <select
                value={durationFilter}
                onChange={(e) => handleDurationChange(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
              >
                <option value="All">Any Duration</option>
                <option value="Full-Day">Full-Day Sightseeing</option>
                <option value="Multi-Day">Multi-Day Packages (2-3 Days)</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips and Sorting */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-forest-900">{filteredPackages.length}</strong> available packages
              </span>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset All Filters ({activeFilterCount})</span>
                </button>
              )}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-forest-900 focus:outline-none cursor-pointer"
              >
                <option value="popular">Popular Packages</option>
                <option value="rating">Highest Rated</option>
                <option value="duration-asc">Duration: Short to Long</option>
                <option value="duration-desc">Duration: Long to Short</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onEnquire={handleEnquire} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-card max-w-lg mx-auto">
            <div className="w-16 h-16 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-forest-900 font-display">No Packages Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 mb-6">
              We couldn't find any tour packages matching your selected filters. Try broadening your criteria or reset filters.
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-nature hover:bg-nature-dark text-white font-bold text-xs px-6 py-2.5 rounded-full transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Enquiry Modal */}
      {modalOpen && (
        <EnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialData={{
            packageName: selectedPkg?.title,
            destination: selectedPkg?.destination,
            tourType: selectedPkg?.tourType,
            pickupLocation: selectedPkg?.pickupLocations?.[0],
            vehiclePreference: selectedPkg?.vehicleOptions?.[0],
          }}
        />
      )}
    </div>
  );
}

