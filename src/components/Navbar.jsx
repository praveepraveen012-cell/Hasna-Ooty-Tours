import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, Menu, X, MapPin, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleGeneralWhatsApp = () => {
    openWhatsApp("Hello Hasna Ooty Tours, I am planning a trip and would like to enquire about your tour packages and private car sightseeing.");
  };

  return (
    <>
      {/* Top micro bar for phone & location */}
      <div className="bg-forest-900 text-xs text-forest-200 py-1.5 px-4 hidden md:block border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-forest-100">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Ooty, The Nilgiris, Tamil Nadu, India</span>
            </span>
            <span className="text-forest-400">|</span>
            <span className="text-forest-300">Private Car Sightseeing & Custom Holiday Tours</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phoneCall}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-forest-400">|</span>
            <span className="text-accent font-medium">24/7 Travel Desk</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-slate-100 py-2.5'
            : 'bg-white py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={SITE_CONFIG.logos.dark}
              alt={SITE_CONFIG.name}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="block text-lg font-bold tracking-tight text-forest-800 font-display leading-tight">
                HASNA OOTY TOURS
              </span>
              <span className="block text-[11px] text-nature font-medium tracking-wide uppercase">
                Private Car Sightseeing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {SITE_CONFIG.navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-forest-700 bg-forest-50 font-semibold shadow-xs'
                      : 'text-slate-700 hover:text-forest-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-forest-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${SITE_CONFIG.phoneCall}`}
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-forest-800 hover:text-forest-600 rounded-lg hover:bg-forest-50 transition-colors"
              title="Call Hasna Ooty Tours"
            >
              <Phone className="w-4 h-4 text-forest-600" />
              <span>Call Us</span>
            </a>

            <button
              onClick={handleGeneralWhatsApp}
              className="flex items-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-hover hover:to-whatsapp text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Booking</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={handleGeneralWhatsApp}
              aria-label="WhatsApp"
              className="p-2 bg-whatsapp/10 text-whatsapp rounded-full hover:bg-whatsapp/20"
            >
              <MessageCircle className="w-5 h-5 fill-whatsapp" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-forest-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <img src={SITE_CONFIG.logos.dark} alt={SITE_CONFIG.name} className="h-8 w-auto" />
                  <span className="font-bold text-forest-800 text-sm font-display">HASNA TOURS</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Navigation</p>
                <div className="space-y-1">
                  {SITE_CONFIG.navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-forest-50 text-forest-800 font-bold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-forest-700'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Contact</p>
                <a
                  href={`tel:${SITE_CONFIG.phoneCall}`}
                  className="flex items-center space-x-3 text-sm text-slate-700 p-2.5 rounded-xl hover:bg-slate-50"
                >
                  <div className="w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center text-forest-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Call Directly</div>
                    <div className="font-semibold text-forest-900">{SITE_CONFIG.phone}</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3 text-sm text-slate-700 p-2.5">
                  <div className="w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center text-forest-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Base Location</div>
                    <div className="font-medium text-slate-800 text-xs">Ooty, The Nilgiris, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={handleGeneralWhatsApp}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-semibold py-3 px-4 rounded-xl shadow-md text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Instant quotes • No upfront card payment required
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

