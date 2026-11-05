import React from 'react';
import { Compass, MessageCircle, CalendarCheck, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      icon: Compass,
      title: 'Explore Packages',
      desc: 'Browse our curated hill station itineraries, destination highlights, and private car options for your travel dates.'
    },
    {
      step: '02',
      icon: MessageCircle,
      title: 'Send Your Enquiry on WhatsApp',
      desc: 'Click "Book Now" or "Enquire" to send your pre-filled tour preference directly to our WhatsApp travel desk.'
    },
    {
      step: '03',
      icon: CalendarCheck,
      title: 'Confirm Your Trip with Our Team',
      desc: 'Get an all-inclusive transparent quote, finalize your pickup spot, and receive confirmed chauffeur details.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-surface-light border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-nature uppercase tracking-wider block mb-2">
            Seamless & Transparent
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Booking your private hill station getaway is fast, personal, and 100% transparent. No complicated booking engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all text-center relative flex flex-col items-center justify-between"
              >
                {/* Step indicator */}
                <div className="absolute top-6 right-6 text-3xl font-extrabold text-forest-100 font-display">
                  {item.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-forest-50 text-nature flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-forest-900 font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="w-8 h-1 bg-nature/20 rounded-full" />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openWhatsApp("Hello Hasna Ooty Tours, I would like to plan a trip with your team. Please guide me through your packages.")}
            className="inline-flex items-center space-x-2 bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md font-display"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat Directly with Our Travel Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
}

