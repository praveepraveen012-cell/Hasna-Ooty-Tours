import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle, Clock, Send,
  Calendar, Users, Navigation, CheckCircle, Car
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp, buildContactEnquiryMessage } from '../utils/whatsapp';
import { DESTINATIONS } from '../data/destinationsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    destination: 'Ooty',
    travelDate: '',
    travellers: '2 Adults',
    pickupLocation: 'Ooty Town',
    tourType: 'Private Sightseeing Tour',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.mobile.trim()) errs.mobile = 'Please provide your contact number';
    if (!formData.travelDate) errs.travelDate = 'Please select tentative travel date';
    if (!formData.pickupLocation.trim()) errs.pickupLocation = 'Please specify your pickup location';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setSuccess(true);

    const whatsappText = buildContactEnquiryMessage(formData);

    setTimeout(() => {
      openWhatsApp(whatsappText);
      setIsSubmitting(false);
    }, 800);
  };

  const handleDirectWhatsApp = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours, I am reaching out from your Contact page to inquire about private car tour packages and availability."
    );
  };

  return (
    <div className="bg-surface-light min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider mb-2">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span>We’d Love to Hear From You</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-forest-900 font-display">
            Contact Hasna Ooty Tours
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions about tour packages, car availability, or custom itineraries? Reach out to our local team in Ooty for fast, friendly assistance.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-forest-900 font-display">Call Us</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Direct phone lines available for immediate inquiries
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneCall}`}
              className="text-sm font-bold text-forest-800 hover:text-nature transition-colors flex items-center space-x-1"
            >
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-whatsapp/10 text-whatsapp flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 fill-whatsapp" />
              </div>
              <h3 className="text-base font-bold text-forest-900 font-display">WhatsApp Booking</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Quickest way to get quotes, itineraries, & car photos
              </p>
            </div>
            <button
              onClick={handleDirectWhatsApp}
              className="text-sm font-bold text-whatsapp hover:underline text-left cursor-pointer"
            >
              +91 98948 61681 (Chat Now)
            </button>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent-dark flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-forest-900 font-display">Email Us</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Send detailed itineraries or corporate group queries
              </p>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-xs sm:text-sm font-bold text-forest-800 hover:text-nature transition-colors break-all"
            >
              {SITE_CONFIG.email}
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 text-nature flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-forest-900 font-display">Location</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Base desk in Ooty with operations across South India
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {SITE_CONFIG.address}
            </span>
          </div>
        </div>

        {/* Contact Form and Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-slate-100">
            <div className="mb-6">
              <span className="text-xs font-bold text-nature bg-forest-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Plan Your Trip
              </span>
              <h2 className="text-2xl font-bold text-forest-900 font-display mt-2">
                Send Tour Booking Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the details below. Upon submission, you will be redirected to WhatsApp with all your answers formatted for our travel team.
              </p>
            </div>

            {success ? (
              <div className="bg-forest-50 border border-forest-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-whatsapp text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-forest-900 font-display">
                  Opening WhatsApp...
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your enquiry is pre-filled! Send the message on WhatsApp to complete your booking conversation with Hasna Tours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-xs text-nature font-bold underline cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full text-sm border rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none ${
                        errors.name ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full text-sm border rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none ${
                        errors.mobile ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Destination
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Travel Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={`w-full text-sm border rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none ${
                        errors.travelDate ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.travelDate && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.travelDate}</p>
                    )}
                  </div>

                  {/* Travellers */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Travellers
                    </label>
                    <select
                      name="travellers"
                      value={formData.travellers}
                      onChange={handleChange}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none bg-white font-medium"
                    >
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                      <option value="3-4 Adults (Family)">3-4 Adults (Family)</option>
                      <option value="5-7 Adults (SUV)">5-7 Adults (SUV)</option>
                      <option value="8+ Adults (Group)">8+ Adults (Group)</option>
                    </select>
                  </div>

                  {/* Pickup Location */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="e.g. Ooty Hotel / CJB Airport"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className={`w-full text-sm border rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none ${
                        errors.pickupLocation ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.pickupLocation && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.pickupLocation}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requests / Message
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Tell us about specific places you wish to visit, accommodation assistance, or vehicle preferences..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-nature focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all duration-200 cursor-pointer text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Validates instantly and launches WhatsApp with all answers formatted.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Google Maps & Office Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100">
              <h3 className="text-lg font-bold text-forest-900 font-display mb-2">
                Our Base Location
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Located in the heart of Ooty, The Nilgiris. Doorstep pickups provided across all hill stations and transit hubs.
              </p>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 sm:h-72 relative">
                <iframe
                  title="Hasna Ooty Tours Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62557.50280547781!2d76.66699477028127!3d11.411855663738596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-nature" />
                  <span>Travel Desk: 24/7 Available</span>
                </span>
                <span className="font-semibold text-forest-800">The Nilgiris, Tamil Nadu</span>
              </div>
            </div>

            {/* Quick Consultation Call Box */}
            <div className="bg-gradient-to-r from-forest-900 to-forest-800 text-white rounded-3xl p-6 shadow-card">
              <h4 className="text-base font-bold font-display mb-2">
                Need immediate trip assistance?
              </h4>
              <p className="text-xs text-forest-200 mb-4 leading-relaxed">
                Speak directly with our local tour planner to customize an itinerary for your arrival time in Ooty or Coimbatore.
              </p>
              <a
                href={`tel:${SITE_CONFIG.phoneCall}`}
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

