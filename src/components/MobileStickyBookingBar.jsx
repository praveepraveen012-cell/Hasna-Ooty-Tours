import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';
import OfficialWhatsAppIcon from './OfficialWhatsAppIcon';

export default function MobileStickyBookingBar() {
  const handleQuickWhatsApp = () => {
    openWhatsApp("Hello Hasna Ooty Tours, I am planning an Ooty holiday. Please share package availability and private car prices.");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 md:hidden shadow-lg">
      <div className="flex items-center space-x-2">
        <a
          href={`tel:${SITE_CONFIG.phoneCall}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-forest-900 rounded-xl font-semibold text-xs transition-colors"
        >
          <Phone className="w-4 h-4 text-forest-700" />
          <span>Call Now</span>
        </a>

        <button
          onClick={handleQuickWhatsApp}
          className="flex-[2] flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#25D366] active:bg-[#20ba5a] text-white rounded-xl font-semibold text-xs shadow-sm transition-colors cursor-pointer"
        >
          <OfficialWhatsAppIcon className="w-4 h-4 text-white" />
          <span>Book on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

