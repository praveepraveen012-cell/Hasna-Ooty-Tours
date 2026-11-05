import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin, Clock, Car, Users, Star, ShieldCheck, Check, X,
  Calendar, MessageCircle, ArrowLeft, Phone, Share2, Sparkles, Navigation
} from 'lucide-react';
import { PACKAGES } from '../data/packagesData';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp, buildPackageBookingMessage } from '../utils/whatsapp';
import EnquiryModal from '../components/EnquiryModal';

export default function PackageDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const pkg = PACKAGES.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(pkg ? pkg.gallery[0] || pkg.image : '');
  const [modalOpen, setModalOpen] = useState(false);

  // In-page form state
  const [formData, setFormData] = useState({
    travelDate: '',
    travellers: '2 Adults',
    pickupLocation: pkg?.pickupLocations?.[0] || 'Ooty',
    vehiclePreference: pkg?.vehicleOptions?.[0] || 'Toyota Innova Crysta',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({});

  if (!pkg) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-forest-900 font-display mb-2">Package Not Found</h2>
        <p className="text-sm text-slate-600 mb-6">
          The requested tour package could not be found. It may have been relocated or renamed.
        </p>
        <Link
          to="/tour-packages"
          className="bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs px-6 py-3 rounded-full transition-all"
        >
          View All Tour Packages
        </Link>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.travelDate) errors.travelDate = 'Please select your tentative travel date';
    if (!formData.pickupLocation) errors.pickupLocation = 'Please select or enter pickup location';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const message = buildPackageBookingMessage({
      packageName: pkg.title,
      destination: pkg.destination,
      tourType: pkg.tourType,
      travelDate: formData.travelDate,
      travellers: formData.travellers,
      pickupLocation: formData.pickupLocation,
      vehiclePreference: formData.vehiclePreference,
      notes: formData.notes,
    });

    openWhatsApp(message);
  };

  const handleInstantWhatsApp = () => {
    const message = buildPackageBookingMessage({
      packageName: pkg.title,
      destination: pkg.destination,
      tourType: pkg.tourType,
      travelDate: 'Flexible',
      travellers: '2-4 Guests',
      pickupLocation: pkg.pickupLocations?.[0] || 'Ooty',
      vehiclePreference: pkg.vehicleOptions?.[0] || 'Innova Crysta',
    });
    openWhatsApp(message);
  };

  return (
    <div className="bg-surface-light min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-forest-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Packages</span>
          </button>

          <div className="text-xs text-slate-400 hidden sm:block">
            <span>Hasna Ooty Tours</span> / <span>{pkg.destination}</span> / <span className="text-forest-900 font-semibold">{pkg.title}</span>
          </div>
        </div>

        {/* Title & Key Highlights Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-nature bg-forest-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {pkg.destination}
                </span>
                <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {pkg.tourType}
                </span>
                <span className="text-xs font-bold text-forest-800 bg-slate-100 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-nature" />
                  <span>{pkg.duration}</span>
                </span>
                {pkg.badge && (
                  <span className="text-xs font-bold text-white bg-forest-900 px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
                {pkg.title}
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {pkg.shortDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={handleInstantWhatsApp}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold px-6 py-3.5 rounded-2xl shadow-md text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Instant WhatsApp Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two-column layout: Left details & Right sticky booking form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery Section */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-card border border-slate-100">
              {/* Active Large Image */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={activeImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white text-xs font-semibold flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{pkg.destination} Sightseeing</span>
                </div>
              </div>

              {/* Thumbnails */}
              {pkg.gallery && pkg.gallery.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
                  {pkg.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImage === img ? 'border-nature shadow-md scale-102' : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Package Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-forest-900 font-display mb-4">
                Package Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {pkg.overview}
              </p>

              {/* Key Highlights Chips */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Highlights Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.sightseeingHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700 bg-forest-50/60 p-2.5 rounded-xl border border-forest-100/60"
                    >
                      <Check className="w-4 h-4 text-nature shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Places Covered with Image Cards */}
            {pkg.placesCovered && pkg.placesCovered.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-forest-900 font-display mb-6">
                  Places Covered in This Tour
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.placesCovered.map((place, idx) => (
                    <div
                      key={idx}
                      className="flex space-x-3.5 p-3 rounded-2xl border border-slate-100 hover:border-forest-200 hover:bg-forest-50/30 transition-all"
                    >
                      <img
                        src={place.img}
                        alt={place.name}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-xs"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-forest-900 font-display">
                          {place.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                          {place.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Day-Wise Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-forest-900 font-display mb-6">
                  Detailed Itinerary
                </h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-forest-100">
                  {pkg.itinerary.map((item, idx) => (
                    <div key={idx} className="relative flex items-start space-x-4">
                      <div className="w-7 h-7 rounded-full bg-forest-700 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md ring-4 ring-white z-10">
                        {idx + 1}
                      </div>
                      <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 flex-1">
                        <div className="text-xs font-bold text-nature uppercase tracking-wider mb-1">
                          {item.day}
                        </div>
                        <h4 className="text-base font-bold text-forest-900 font-display mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100">
                <h3 className="text-base font-bold text-forest-900 font-display flex items-center space-x-2 mb-4 text-nature">
                  <Check className="w-5 h-5 text-nature" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-nature shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100">
                <h3 className="text-base font-bold text-slate-800 font-display flex items-center space-x-2 mb-4 text-slate-500">
                  <X className="w-5 h-5 text-slate-400" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vehicle Options Available */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h3 className="text-lg font-bold text-forest-900 font-display mb-4 flex items-center space-x-2">
                <Car className="w-5 h-5 text-nature" />
                <span>Available Vehicles for This Tour</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.vehicleOptions.map((v, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-forest-50/50 rounded-2xl border border-forest-100/80 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-forest-800 text-white flex items-center justify-center shrink-0">
                        <Car className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-forest-900">{v}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-nature bg-white px-2.5 py-1 rounded-full shadow-xs">
                      100% Private
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking / Enquiry Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-elevated border border-slate-100">
              <div className="mb-5 pb-5 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-nature uppercase tracking-wider">
                    Transparent Pricing
                  </span>
                  <span className="text-xs font-bold text-accent">★★★★★ 4.9/5</span>
                </div>
                <h3 className="text-xl font-extrabold text-forest-900 font-display mt-1">
                  Book This Tour
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect directly with Hasna Ooty Tours on WhatsApp for instant confirmation & best quote.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-nature" />
                    <span>Travel Date *</span>
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => {
                      setFormData({ ...formData, travelDate: e.target.value });
                      if (formErrors.travelDate) setFormErrors({ ...formErrors, travelDate: null });
                    }}
                    className={`w-full text-xs sm:text-sm border rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none ${
                      formErrors.travelDate ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.travelDate && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.travelDate}</p>
                  )}
                </div>

                {/* Travellers */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-nature" />
                    <span>Number of Travellers</span>
                  </label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
                  >
                    <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="3-4 Adults (Small Family)">3-4 Adults (Small Family)</option>
                    <option value="5-7 Adults (Family / Group)">5-7 Adults (Family / Group)</option>
                    <option value="8+ Adults (Group / Tempo)">8+ Adults (Group / Tempo)</option>
                  </select>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-nature" />
                    <span>Pickup City / Location</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Ooty Hotel / Coimbatore Airport"
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none"
                  />
                </div>

                {/* Preferred Vehicle */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Car className="w-3.5 h-3.5 text-nature" />
                    <span>Preferred Car</span>
                  </label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
                  >
                    {pkg.vehicleOptions.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Notes or Places to Add (Optional)
                  </label>
                  <textarea
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Need early morning pickup..."
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Booking on WhatsApp</span>
                </button>
              </form>

              {/* Direct Call Option */}
              <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <a
                  href={`tel:${SITE_CONFIG.phoneCall}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-forest-800 hover:text-nature transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>Prefer calling? {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

