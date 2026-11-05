import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-surface-light text-center">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-slate-100">
        <div className="w-16 h-16 rounded-full bg-forest-50 text-nature flex items-center justify-center mx-auto mb-4">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-extrabold text-forest-900 font-display">404</h1>
        <h2 className="text-xl font-bold text-slate-800 font-display mt-1">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2 mb-6">
          The page you are looking for does not exist or has been moved to another mountain trail.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs px-5 py-3 rounded-full transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => openWhatsApp("Hello Hasna Ooty Tours, I was browsing your website and need help finding tour package information.")}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-xs px-5 py-3 rounded-full transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}

