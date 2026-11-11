import { assetUrl } from '../utils/assets.js';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, UserCheck, Sliders, DollarSign, Clock,
  ThumbsUp, Heart, Compass, CheckCircle2, MessageCircle, ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';
import VehicleFleetSection from '../components/VehicleFleetSection';

export default function AboutPage() {
  const handleAboutWhatsApp = () => {
    openWhatsApp(
      "Hello Hasna Ooty Tours, I read about your private car tour services on your About page. I'd like to plan my upcoming trip with your team."
    );
  };

  return (
    <div className="bg-surface-light min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4 text-accent" />
              <span>About Hasna Ooty Tours</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-forest-900 font-display leading-tight">
              Your Trusted Partner for Scenic Car Tours in South India
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              At <strong className="text-forest-900">Hasna Ooty Tours</strong>, we believe that travel should be more than just a journey – it should be an unforgettable experience. We specialize in providing private car tours to the most stunning and serene destinations in South India, including <span className="font-semibold text-nature">Ooty, Coonoor, Coimbatore, Kodaikanal, Mysore, Coorg, and Wayanad</span>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you're here for a relaxing hill station vacation, a romantic honeymoon getaway, a lively friends’ road trip, or a full-family reunion, we ensure your travel is comfortable, safe, and truly memorable from doorstep pickup to final departure.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleAboutWhatsApp}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Talk with Our Team on WhatsApp</span>
              </button>

              <Link
                to="/tour-packages"
                className="inline-flex items-center space-x-1.5 bg-white border border-slate-200 text-forest-800 hover:bg-forest-50 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-xs transition-all font-display"
              >
                <span>Browse Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
              <img
                src={assetUrl("/images/hasna-sunset-tea-banner.jpg?v=20261111")}
                alt="Scenic Ooty Valley Hasna Tours"
                className="w-full h-[400px] sm:h-[460px] object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-bold text-accent-light block uppercase tracking-wider">
                  The Nilgiris
                </span>
                <h3 className="text-xl font-bold font-display">
                  100% Private Car Sightseeing
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  Experienced local drivers trained for hill roads and hairpin bends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-forest-900 font-display mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our mission is simple – to provide safe, comfortable, and memorable private tours to some of South India's most breathtaking hill stations and heritage destinations. We aim to make every journey an enjoyable experience, ensuring you can focus on the beauty around you while we take care of all travel and driving details.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent-dark flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-forest-900 font-display mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To become the most reliable and beloved travel partner for anyone looking to explore the natural grandeur of Ooty, Coonoor, Kodaikanal, Mysore, Coorg, and Wayanad in the most comfortable, stress-free, and affordable way possible.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-nature uppercase tracking-wider block mb-1">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-900 font-display">
              What Makes Hasna Tours Different?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 rounded-2xl bg-forest-50/50 border border-forest-100/60">
              <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-forest-900 font-display mb-2">
                Local Nilgiri Expertise
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We are passionate about showcasing South India's hill stations. Our native knowledge helps us craft unique, unhurried itineraries tailored to your family's pace.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-forest-50/50 border border-forest-100/60">
              <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-forest-900 font-display mb-2">
                Customer-Centric Approach
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your comfort, privacy, and safety are our highest priorities. We maintain sanitized private cars and go the extra mile to ensure every aspect of your holiday is seamless.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-forest-50/50 border border-forest-100/60">
              <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-forest-900 font-display mb-2">
                Responsible & Safe Tourism
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We respect the delicate Nilgiri ecosystem and follow eco-friendly, responsible travel practices to protect the pristine mountain environment for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Fleet Preview on About page */}
        <VehicleFleetSection />
      </div>
    </div>
  );
}

