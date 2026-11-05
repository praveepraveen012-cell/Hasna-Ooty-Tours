import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsApp("Hello Hasna Ooty Tours, I am planning a trip to Ooty and would like to know package details and private car options.");
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-center space-x-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-xl shadow-lg border border-slate-100 animate-bounce duration-1000">
          <span>Plan your Ooty trip on WhatsApp!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="ml-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp with Hasna Ooty Tours"
        className="relative group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-whatsapp-dark to-whatsapp text-white rounded-full shadow-elevated hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
        </span>
        <MessageCircle className="w-8 h-8 fill-white" />
      </button>
    </div>
  );
}

