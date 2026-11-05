import React, { useState } from 'react';
import { X, MessageCircle, Calendar, Users, MapPin, Car, CheckCircle } from 'lucide-react';
import { openWhatsApp, buildPackageBookingMessage } from '../utils/whatsapp';

export default function EnquiryModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    packageName: initialData.packageName || 'Ooty Custom Package',
    destination: initialData.destination || 'Ooty',
    travelDate: initialData.travelDate || '',
    travellers: initialData.travellers || '2 Adults',
    tourType: initialData.tourType || 'Sightseeing Tour',
    pickupLocation: initialData.pickupLocation || 'Ooty Town',
    vehiclePreference: initialData.vehiclePreference || 'Toyota Innova Crysta (7 Seater)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select your tentative travel date';
    }
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please enter your pickup location';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);

    const message = buildPackageBookingMessage(formData);

    setTimeout(() => {
      openWhatsApp(message);
      setSubmitted(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-forest-900 font-display">Opening WhatsApp...</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Redirecting you to our official WhatsApp booking desk with all your travel details pre-filled.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-bold text-nature bg-forest-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                WhatsApp Booking Enquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-900 font-display">
                {formData.packageName}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Destination: <span className="font-semibold text-forest-800">{formData.destination}</span> • Private Car Sightseeing
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-nature" />
                    <span>Travel Date *</span>
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className={`w-full text-sm border rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none ${
                      errors.travelDate ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.travelDate && (
                    <p className="text-[11px] text-red-500 mt-0.5">{errors.travelDate}</p>
                  )}
                </div>

                {/* Travellers */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-nature" />
                    <span>Number of Travellers</span>
                  </label>
                  <select
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none bg-white"
                  >
                    <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="3-4 Adults (Small Family)">3-4 Adults (Small Family)</option>
                    <option value="5-7 Adults (Family / Group)">5-7 Adults (Family / Group)</option>
                    <option value="8+ Adults (Large Group)">8+ Adults (Large Group)</option>
                  </select>
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-nature" />
                  <span>Pickup Location *</span>
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="e.g., Ooty Hotel / Coimbatore Airport / Mysore"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className={`w-full text-sm border rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none ${
                    errors.pickupLocation ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                  }`}
                />
                {errors.pickupLocation && (
                  <p className="text-[11px] text-red-500 mt-0.5">{errors.pickupLocation}</p>
                )}
              </div>

              {/* Preferred Vehicle */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                  <Car className="w-3.5 h-3.5 text-nature" />
                  <span>Preferred Vehicle</span>
                </label>
                <select
                  name="vehiclePreference"
                  value={formData.vehiclePreference}
                  onChange={handleChange}
                  className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none bg-white"
                >
                  <option value="Toyota Innova Crysta (7 Seater Luxury)">Toyota Innova Crysta (7 Seater Luxury)</option>
                  <option value="Toyota Innova (7 Seater Family SUV)">Toyota Innova (7 Seater Family SUV)</option>
                  <option value="Swift Dzire (5 Seater Sedan)">Swift Dzire (5 Seater Sedan)</option>
                  <option value="Toyota Etios (5 Seater Sedan)">Toyota Etios (5 Seater Sedan)</option>
                  <option value="Tempo Traveller (12+1 Seater Group)">Tempo Traveller (12+1 Seater Group)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Requests / Places You Want to Add (Optional)
                </label>
                <textarea
                  rows="2"
                  name="notes"
                  placeholder="e.g. Need infant car seat, want early morning pickup, etc."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-nature focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Booking Enquiry on WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Opens WhatsApp directly • Instant reply from Hasna Tours team
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

