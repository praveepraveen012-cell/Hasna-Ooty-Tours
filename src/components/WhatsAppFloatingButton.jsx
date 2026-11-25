import React, { useState } from 'react';
import { X } from 'lucide-react';
import OfficialWhatsAppIcon from './OfficialWhatsAppIcon';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsApp("Hello Hasna Ooty Tours, I am planning a trip to Ooty and would like to know package details and private car options.");
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-center space-x-2.5">
      {/* Clean, professional prompt badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-full shadow-md border border-slate-200/80 transition-opacity">
          <span>Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss tooltip"
            className="ml-2 text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Official WhatsApp Floating Action Button */}
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp with Hasna Ooty Tours"
        title="Chat on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <OfficialWhatsAppIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}

