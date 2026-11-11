import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  const handleWhatsApp = () => {
    openWhatsApp("Hello Hasna Ooty Tours, I am looking for travel information and tour package availability.");
  };

  return (
    <footer className="bg-forest-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-forest-800">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-accent shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Private Cars</h4>
              <p className="text-xs text-forest-300">No sharing with strangers</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-accent shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Expert Hill Drivers</h4>
              <p className="text-xs text-forest-300">Trained for Nilgiri Ghats</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-accent shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">On-Time Pickup</h4>
              <p className="text-xs text-forest-300">Punctual & dependable</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-whatsapp shrink-0">
              <MessageCircle className="w-6 h-6 fill-whatsapp" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Instant WhatsApp</h4>
              <p className="text-xs text-forest-300">Quick quotes & bookings</p>
            </div>
          </div>
        </div>

        {/* Main 4-column footer body */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={SITE_CONFIG.logos.white}
                alt={SITE_CONFIG.name}
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="block text-lg font-bold text-white font-display tracking-tight">
                  HASNA OOTY TOURS
                </span>
                <span className="block text-xs text-accent font-medium uppercase tracking-wider">
                  South India Private Car Sightseeing
                </span>
              </div>
            </div>

            <p className="text-sm text-forest-200 leading-relaxed pr-4">
              Hasna Ooty Tours specializes in comfortable private car tours across Ooty, Coonoor, Kodaikanal, Mysore, Coorg, Wayanad, and Coimbatore. Experience scenic hill stations with verified local chauffeurs and tailored travel itineraries.
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center space-x-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-xs px-4 py-2.5 rounded-full shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Us on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display border-b border-forest-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/tour-packages" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/tour-types" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Tour Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display border-b border-forest-800 pb-2">
              Destinations
            </h4>
            <ul className="space-y-2 text-sm text-forest-200">
              <li><Link to="/tour-packages?destination=Ooty" className="hover:text-accent transition-colors">Ooty Hill Station</Link></li>
              <li><Link to="/tour-packages?destination=Coonoor" className="hover:text-accent transition-colors">Coonoor Tea Estates</Link></li>
              <li><Link to="/tour-packages?destination=Kodaikanal" className="hover:text-accent transition-colors">Kodaikanal Princess</Link></li>
              <li><Link to="/tour-packages?destination=Coorg" className="hover:text-accent transition-colors">Coorg Scotland of India</Link></li>
              <li><Link to="/tour-packages?destination=Mysore" className="hover:text-accent transition-colors">Mysore Royal Palaces</Link></li>
              <li><Link to="/tour-packages?destination=Wayanad" className="hover:text-accent transition-colors">Wayanad Nature Paradise</Link></li>
              <li><Link to="/tour-packages?destination=Coimbatore" className="hover:text-accent transition-colors">Coimbatore & Isha Yoga</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display border-b border-forest-800 pb-2">
              Official Contact
            </h4>
            <ul className="space-y-3 text-sm text-forest-200">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneCall}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" />
                <button onClick={handleWhatsApp} className="hover:text-white transition-colors text-left">
                  {SITE_CONFIG.phone} (WhatsApp)
                </button>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line and Powered By */}
        <div className="pt-8 border-t border-forest-800 flex flex-col md:flex-row items-center justify-between text-xs text-forest-400 gap-4">
          <p className="text-forest-300">© 2026 Hasna Ooty Tours. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-4 sm:space-x-6 text-forest-400 text-[11px] sm:text-xs">
            <span>Direct WhatsApp Booking</span>
            <span>•</span>
            <span>Local Nilgiri Experts</span>
            <span>•</span>
            <span>No Hidden Charges</span>
          </div>

          <div className="flex items-center space-x-1.5 text-xs text-forest-300">
            <span>Powered by</span>
            <a
              href="https://grexotix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent hover:text-white transition-colors underline decoration-accent/40 hover:decoration-white"
            >
              Grexotix
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

